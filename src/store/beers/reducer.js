import INITIAL_STATE from "./state";
import Types from "./actionTypes";

const updateBeers = (state, action) => ({
  ...state,
  beersList: [...action.payload],
  total: action.payload.length
});

const loadBeersRequest = (state, action) => ({
  ...state,
  isLoadingBeers: true,
  loadingBeersSuccess: false,
  loadingBeersFailure: false
});

const loadBeersSuccess = (state, action) => ({
  ...state,
  isLoadingBeers: false,
  loadingBeersSuccess: true,
  loadingBeersFailure: false
});

const loadBeersFailure = (state, action) => ({
  ...state,
  isLoadingBeers: false,
  loadingBeersSuccess: false,
  loadingBeersFailure: true
});

const loadBeerRequest = (state, action) => ({
  ...state,
  isLoadingSelectedBeer: true,
  loadingSelectedBeerSuccess: false,
  loadingSelectedBeerFailure: false,
  selectedBeer: {}
});

const loadBeerSuccess = (state, action) => ({
  ...state,
  isLoadingSelectedBeer: false,
  loadingSelectedBeerSuccess: true,
  loadingSelectedBeerFailure: false
});

const loadBeerFailure = (state, action) => ({
  ...state,
  isLoadingSelectedBeer: false,
  loadingSelectedBeerSuccess: false,
  loadingSelectedBeerFailure: true
});

const updateSelectedBeer = (state, action) => ({
  ...state,
  selectedBeer: { ...action.payload }
});

const requestReducers = (state = INITIAL_STATE, action) => {
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
};

const updateReducers = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case Types.UPDATE_BEERS:
      return updateBeers(state, action);

    case Types.UPDATE_BEER:
      return updateSelectedBeer(state, action);
    default:
      return state;
  }
};

const reducer = (state = INITIAL_STATE, action) => ({
  ...requestReducers(state, action),
  ...updateReducers(state, action)
});

export default reducer;
