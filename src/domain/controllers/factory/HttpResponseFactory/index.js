import parseToCamel from "../../../../utils/object/parseSnakeCaseToCamelObject";

import type { HttpResponse } from "./../../../types/HttpResponse";
import { Try } from "../../../../utils/monads";

export default customMapper => (res: any): HttpResponse => ({
  data: Try.of(() => customMapper(res.data), parseToCamel(res.data)).get(),
  status: res.status,
  meta: res.headers
});
