import INITIAL_STATE from "./state";

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;

/* const requestReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.LOAD_BEERS_REQUEST:
      return loadBeersRequest(state, action);

    case Types.LOAD_BEERS_SUCCESS:
      return loadBeersSuccess(state, action);

    case Types.LOAD_BEERS_FAILURE:
      return loadBeersFailure(state, action);

    case Types.LOAD_BEER_REQUEST:
      return loadBeerRequest(state, action);

    case Types.LOAD_BEER_SUCCESS:
      return loadBeerSuccess(state, action);

    case Types.LOAD_BEER_FAILURE:
      return loadBeerFailure(state, action);

    default:
      return state;
  }
}; */
