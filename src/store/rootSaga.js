import { all } from "redux-saga/effects";

import beersSagas from "./beers/sagas";

export default function* rootSaga() {
  yield all([]);
}
