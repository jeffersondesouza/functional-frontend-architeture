import Types from "./actionTypes";

const loadBeersRequest = reloadMode => ({
  type: Types.LOAD_BEERS_REQUEST,
  payload: reloadMode,
  meta: {}
});

const loadBeersSuccess = payload => ({
  type: Types.LOAD_BEERS_SUCCESS,
  payload
});

const loadBeersFailure = error => ({
  type: Types.LOAD_BEERS_FAILURE,
  payload: error
});

const loadBeerRequest = id => ({
  type: Types.LOAD_BEER_REQUEST,
  payload: id
});

const loadBeerSuccess = beers => ({
  type: Types.LOAD_BEER_SUCCESS,
  payload: beers
});

const loadBeerFailure = error => ({
  type: Types.LOAD_BEER_FAILURE,
  payload: error
});

const updateBeers = beer => ({
  type: Types.UPDATE_BEERS,
  payload: beer
});

const updateReloadBeers = beer => ({
  type: Types.UPDATE_RELOAD_BEERS,
  payload: beer
});

const updateSelectedBeer = beer => ({
  type: Types.UPDATE_SELECTED_BEER,
  payload: beer
});

const filterBeers = name => ({
  type: Types.FILTER_BEERS,
  payload: name
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
  filterBeers,
  updateReloadBeers
};
