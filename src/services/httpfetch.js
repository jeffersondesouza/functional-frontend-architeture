import axios from "axios";

import parseToCamel from "../utils/object/parseSnakeCaseToCamelObject";
import { Try, Maybe } from "../../../../utils/monads";

const mapReeponse = customMapper => res => ({
  data: Try.of(() => customMapper(res.data), parseToCamel(res.data)).get(),
  status: Maybe.of(res.data)
    .map(data => data.status)
    .get(0),
  httpStatus: res.status,
  meta: res.headers
});

const request = (requestOptions, customMapper) => {
  return axios(requestOptions).then(mapReeponse(customMapper));
};

export default {
  request
};
