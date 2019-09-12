// @flow
import type { HttpRequestOptions } from "./../../types/HttpRequestOptions";
import BeerHttpFactory from "../../factory/BeerHttpFactory";

export default (data: any): HttpRequestOptions => ({
  url: `https://api.punkapi.com/v2/beers`,
  method: "POST",
  data: BeerHttpFactory.toSaveBeersRequest(data)
});
