// @flow
import axios from "axios";

import type { HttpRequestOptions } from "./../types/HttpRequestOptions";
import type { HttpResponse } from "./../types/HttpResponse";

import HttpResponseFactory from "../controllers/factory/HttpResponseFactory";

const request = (
  requestOptions: HttpRequestOptions,
  customMapper?: () => any
): Promise<HttpResponse> => {
  return axios(requestOptions).then(HttpResponseFactory(customMapper));
};

export default {
  request
};
