// @flow
import type { HttpRequestOptions } from "./../../../types/HttpRequestOptions";

export const loadBeers = (page: number): HttpRequestOptions => ({
  url: `https://api.punkapi.com/v2/beers?page=${page}&per_page=4`,
  method: "GET"
});

const loadBeer = (id: number): HttpRequestOptions => ({
  url: `https://api.punkapi.com/v2/beers/${id}`,
  method: "GET"
});

export default {
  loadBeers,
  loadBeer
};
