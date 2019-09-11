import { combineReducers } from "redux";

import beersReducer from "./beers/reducer";

const appReducer = combineReducers({
});

const rootReducer = (state, action) => {
  if (action.type === "user:LOGOUT_SUCCESS") {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;