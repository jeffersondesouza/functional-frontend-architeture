// @flow
import type { HttpRequestOptions } from "./../../types/HttpRequestOptions";

export default (page: number): HttpRequestOptions => ({
  url: `https://api.punkapi.com/v2/beers?page=${page}&per_page=3`,
  method: "GET"
});
