// @flow

import type { HttpResponse } from "./../../../types/HttpResponse";

export default (res: any): HttpResponse => ({
  data: res.data,
  status: res.status,
  meta: res.headers
});
