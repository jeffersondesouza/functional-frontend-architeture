// @flow
import axios from "axios";

import HttpResponseFactory from "../factory/HttpResponseFactory";

import type { HttpRequestOptions } from "./../types/HttpRequestOptions";
import type { HttpResponse } from "./../types/HttpResponse";

const request = (
  requestOptions: HttpRequestOptions,
  customMapper?: () => any
): Promise<HttpResponse> => {
  return axios(requestOptions).then(HttpResponseFactory(customMapper));
};

export default {
  request
};
