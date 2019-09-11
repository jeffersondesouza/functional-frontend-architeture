import { combineReducers } from "redux";

import beersReducer from "./modules/beers/reducer";

const appReducer = combineReducers({
  beers: beersReducer
});

const rootReducer = (state, action) => {
  if (action.type === "user:LOGOUT_SUCCESS") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
