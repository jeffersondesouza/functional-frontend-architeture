// @flow
import parseToCamel from "../../../../utils/object/parseSnakeCaseToCamelObject";

import type { HttpResponse } from "./../../../types/HttpResponse";

export default (res: any): HttpResponse => ({
  data: parseToCamel(res.data),
  status: res.status,
  meta: res.headers
});
