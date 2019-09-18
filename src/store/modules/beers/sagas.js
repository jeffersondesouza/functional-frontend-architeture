//  @flow
import { takeEvery, put, all, select, call } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";
import selectLoadBeersPage from "../../selectors/selectLoadBeersPage";

import http from "../../../domain/services/HttpFetch";

import {
  loadBeersQuery,
  loadBeerQuery
} from "../../../domain/repositories/BeerRepository";

import { BeersFactory, BeerFactory } from "../../../domain/factory/";

/**
 * @param {*} paylod means reloadMode
 */
function* loadBeersEffect({ payload }) {
  const reloadMode = payload;
  const beersPage = yield select(selectLoadBeersPage);

  // {data, status, meta}
  const { data, status } = yield call(http.request, loadBeersQuery(beersPage));
  const beers = BeersFactory(data);

  if (status !== 0) {
    return yield put(actions.loadBeersFailure());
  }

  yield put(actions.loadBeersSuccess());

  if (reloadMode) {
    yield put(actions.updateReloadBeers(beers));
  } else {
    yield put(actions.updateBeers(beers));
  }

  /* 
      this separations ensure more flexibility to use the reponse like:

      const highPH = [...data].map(beer => beer.ph).sort((a, b) => b - a)[0];

      const beetTip = BeerTipFactory(data)
  */
}

function* loadDetailsBeerEffect({ payload }) {
  const { data } = yield http.request(loadBeerQuery(payload));

  const beer = BeerFactory(data[0]);

  yield put(actions.loadBeersSuccess());

  yield put(actions.updateSelectedBeer(beer));
}

function* watchLoadBeers() {
  yield takeEvery(actionTypes.LOAD_BEERS_REQUEST, loadBeersEffect);
}

function* watchLoadDetailsBeer() {
  yield takeEvery(actionTypes.LOAD_BEER_REQUEST, loadDetailsBeerEffect);
}

function* rootSaga(): Generator<any, void, empty> {
  yield all([watchLoadBeers(), watchLoadDetailsBeer()]);
}

export default rootSaga;
