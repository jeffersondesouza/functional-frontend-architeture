// @flow
import parseToCamel from "../../../../utils/object/parseSnakeCaseToCamelObject";
import { Try, Maybe } from "../../../../utils/functors";

type HttpResponse = {
  data: any,
  status: number,
  meta?: Object
};

type CustomMapper = any => HttpResponse;

export default (customMapper: CustomMapper) => (res: any): HttpResponse => ({
  data: Try.of(() => customMapper(res.data), parseToCamel(res.data)).get(),
  status: Maybe.of(res.data)
    .map(data => data.status)
    .get(5),
  httpStatus: res.status,
  meta: res.headers
});
