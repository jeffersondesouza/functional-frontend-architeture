import { takeEvery, put, all } from "redux-saga/effects";
import actionTypes from "./actionTypes";

function* loadBeers({ payload }) {
  console.log("payload:", payload);
}

function* loadDetailsBeers({ payload }) {
  console.log("payload:", payload);
}

function* watchLoadBeers() {
  yield takeEvery(actionTypes.LOAD_BEERS_REQUEST, loadBeers);
}

function* watchLoadDetailsBeer() {
  yield takeEvery(actionTypes.LOAD_BEER_REQUEST, loadDetailsBeers);
}

function* rootSaga() {
  yield all([watchLoadBeers(), watchLoadDetailsBeer()]);
}

export default rootSaga;
