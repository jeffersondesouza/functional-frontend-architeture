import Types from "./actionTypes";

const loadBeersRequest = page => ({
  type: Types.LOAD_BEERS_REQUEST,
  payload: page
});

const loadBeersSuccess = payload => ({
  type: Types.LOAD_BEERS_SUCCESS,
  payload
});

const loadBeersFailure = payload => ({
  type: Types.LOAD_BEERS_FAILURE,
  payload
});

const loadBeerRequest = payload => ({
  type: Types.LOAD_BEER_REQUEST,
  payload
});

const loadBeerSuccess = payload => ({
  type: Types.LOAD_BEER_SUCCESS,
  payload
});

const loadBeerFailure = payload => ({
  type: Types.LOAD_BEER_FAILURE,
  payload
});

const updateBeers = payload => ({
  type: Types.UPDATE_BEERS,
  payload
});

const updateSelectedBeer = payload => ({
  type: Types.UPDATE_SELECTED_BEER,
  payload
});

const filterBeers = payload => ({
  type: Types.FILTER_BEERS,
  payload
});

export default {
  loadBeersRequest,
  loadBeersSuccess,
  loadBeersFailure,
  loadBeerRequest,
  loadBeerSuccess,
  loadBeerFailure,
  updateBeers,
  updateSelectedBeer,
  filterBeers
};
