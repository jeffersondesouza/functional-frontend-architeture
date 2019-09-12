// @flow
import axios from "axios";

import type { HttpRequestOptions } from "./../types/HttpRequestOptions";
import type { HttpResponse } from "./../types/HttpResponse";

const request = (requestOpeitons: HttpRequestOptions): Promise<HttpResponse> =>
  axios(requestOpeitons).then(res => ({
    data: res.data,
    status: res.status,
    meta: res.headers
  }));

export default {
  request
};
