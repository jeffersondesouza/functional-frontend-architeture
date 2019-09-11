// @flow
import type { HttpRequestOptions } from "./../../../types/HttpRequestOptions";

export default (id: number): HttpRequestOptions => ({
  url: `https://api.punkapi.com/v2/beers/${id}`,
  method: "GET"
});
