import axios from "axios";
import parseHttpResponse from "./parseHttpResponse";
import type { HttpResponse } from "./../../../types/HttpResponse";

const request = (requestOptions, customMapperFn): HttpResponse =>
  axios(requestOptions).then(parseHttpResponse(customMapperFn));

export default request;
