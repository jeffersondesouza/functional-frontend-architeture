//  @flow
import { takeEvery, put, all, select, call } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";
import selectLoadBeersPage from "../../selectors/selectLoadBeersPage";

import httpFetchService from "../../../domain/services/HttpFetch";

import {
  loadBeersQuery,
  loadBeerQuery
} from "../../../domain/repositories/BeerRepository";

import { BeersFactory, BeerFactory } from "../../../domain/factory/";

/**
 * @param {*} paylod means reloadMode
 */
function* loadBeersEffect({ payload }) {
  const beersPage = yield select(selectLoadBeersPage);

  const { data } = yield call(
    httpFetchService.request,
    loadBeersQuery(beersPage)
  );
  const beers = BeersFactory(data);

  /* 
      this separations ensure more flexibility to use the reponse like:

      const highPH = [...data].map(beer => beer.ph).sort((a, b) => b - a)[0];

      const beetTip = BeerTipFactory(data)
  */

  yield put(actions.loadBeersSuccess());

  if (payload) {
    yield put(actions.updateReloadBeers(beers));
  } else {
    yield put(actions.updateBeers(beers));
  }
}

function* loadDetailsBeerEffect({ payload }) {
  const { data } = yield httpFetchService.request(loadBeerQuery(payload));

  const beer = BeerFactory(data[10]);

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
