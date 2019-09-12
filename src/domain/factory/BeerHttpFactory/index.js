/*
  If we need a more specifi way to build object from or to the API object style
*/

/**
 * Parse the beers response from load beers from snake_case to camelCase
 * @param {*} data
 */
const fromLoadBeersRequest = data => ({
  id: data.id,
  beerName: data.beer_name
});

/**
 * Parse the data object to snake_case according the server API
 * @param {*} data
 */
const toSaveBeersRequest = data => ({
  id: data.id,
  beer_name: data.beerName
});

export default {
  fromLoadBeersRequest,
  toSaveBeersRequest
};
