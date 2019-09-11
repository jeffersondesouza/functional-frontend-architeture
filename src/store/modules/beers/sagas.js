//  @flow
import { takeEvery, put, call, all, select } from "redux-saga/effects";

import actions from "./actions";
import actionTypes from "./actionTypes";
import httpfetch from "../../../models/services/httpfetch";
import selectLoadBeersPage from "../../selectors/selectLoadBeersPage";
import { BeersFactory } from "../../../models/controllers/factory/";
import { loadBeers } from "../../../models/controllers/repository/BeerQueries";

function* loadBeersEffect({ payload }) {
  const page = yield select(selectLoadBeersPage);
  const res = yield httpfetch.request(loadBeers(page));

  const beers = BeersFactory(res.data);
  yield put(actions.loadBeersSuccess());

  if (payload) {
    yield put(actions.updateReloadBeers(beers));
  } else {
    yield put(actions.updateBeers(beers));
  }
}

function* loadDetailsBeerEffect({ payload }) {}

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
