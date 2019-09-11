// @flow
import axios from "axios";

import type { HttpRequestOptions } from "./../types/HttpRequestOptions";
import type { HttpResponse } from "./../types/HttpResponse";

import HttpResponseFactory from "../controllers/factory/HttpResponseFactory";

const request = (requestOptions: HttpRequestOptions): Promise<HttpResponse> => {
  return axios(requestOptions).then(HttpResponseFactory);
};
export default {
  request
};
