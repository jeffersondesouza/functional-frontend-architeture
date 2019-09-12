// @flow
import type { HttpRequestOptions } from "./../../../types/HttpRequestOptions";
import { toRequest } from "../../factory/BeerFactory";

export default (data: any): HttpRequestOptions => ({
  url: `https://api.punkapi.com/v2/beers`,
  method: "POST",
  data: toRequest(data)
});
