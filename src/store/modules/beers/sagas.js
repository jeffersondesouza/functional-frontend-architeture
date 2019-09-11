//  @flow
import { takeEvery, put, call, all, select } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";
import httpfetch from "../../../models/services/httpfetch";
import selectLoadBeersPage from "../../selectors/selectLoadBeersPage";
import {
  BeersFactory,
  BeerFactory
} from "../../../models/controllers/factory/";
import {
  loadBeersQuery,
  loadBeerQuery
} from "../../../models/controllers/repository/BeerQueries";

function* loadBeersEffect({ payload }) {
  const loadBeerPage = yield select(selectLoadBeersPage);
  const loadBeersResponse = yield call(
    httpfetch.request,
    loadBeersQuery(loadBeerPage)
  );

  const beers = BeersFactory(loadBeersResponse.data);

  yield put(actions.loadBeersSuccess());

  // paylod means reloadMode
  if (payload) {
    yield put(actions.updateReloadBeers(beers));
  } else {
    yield put(actions.updateBeers(beers));
  }
}

function* loadDetailsBeerEffect({ payload }) {
  
  const loadBeerResponse = yield httpfetch.request(loadBeerQuery(payload));
  
  const beer = BeerFactory(loadBeerResponse.data[0]);
  
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
