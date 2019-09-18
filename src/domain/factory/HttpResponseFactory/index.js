import parseToCamel from "../../../utils/object/parseSnakeCaseToCamelObject";

import type { HttpResponse } from "./../../../types/HttpResponse";
import { Try, Maybe } from "../../../utils/functors";

export default customMapper => (res: any): HttpResponse => ({
  data: Try.of(() => customMapper(res.data), parseToCamel(res.data)).get(),
  status: Maybe.of(res.data)
    .map(data => data.status)
    .get(5),
  httpStatus: res.status,
  meta: res.headers
});
