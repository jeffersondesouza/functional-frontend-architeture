// @flow
import parseToCamel from "../../../../utils/object/parseSnakeCaseToCamelObject";
import { Try, Maybe } from "../../../../utils/functors";

import type { HttpResponse } from "./../../../types/HttpResponse";

type CustomMapper = any => HttpResponse;

export default (customMapper: CustomMapper) => (res: any): HttpResponse => ({
  data: Try.of(() => customMapper(res.data), parseToCamel(res.data)).get(),
  status: Maybe.of(res.data)
    .map(data => data.status)
    .get(0),
  httpStatus: res.status,
  meta: res.headers
});
