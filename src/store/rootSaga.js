import { all } from "redux-saga/effects";

import beersSagas from "./modules/beers/sagas";

export default function* rootSaga() {
  yield all([]);
}
