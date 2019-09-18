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

function* loadBeersEffect({ payload }) {
  const loadBeerPage = yield select(selectLoadBeersPage);

  const { data } = yield call(
    httpFetchService.request,
    loadBeersQuery(loadBeerPage)
  );
  const beers = BeersFactory(data);

  yield put(actions.loadBeersSuccess());

  // paylod means reloadMode
  if (payload) {
    yield put(actions.updateReloadBeers(beers));
  } else {
    yield put(actions.updateBeers(beers));
  }
}

function* loadDetailsBeerEffect({ payload }) {
  const loadBeerResponse = yield httpFetchService.request(
    loadBeerQuery(payload)
  );

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
