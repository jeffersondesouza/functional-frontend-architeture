// @flow
import axios from "axios";

import type { HttpRequestOptions } from "./../types/HttpRequestOptions";
import type { HttpResponse } from "./../types/HttpResponse";

import HttpResponseFactory from "../controllers/factory/HttpResponseFactory";

const request = (requestOpeitons: HttpRequestOptions): Promise<HttpResponse> =>
  axios(requestOpeitons).then(HttpResponseFactory);

export default {
  request
};
