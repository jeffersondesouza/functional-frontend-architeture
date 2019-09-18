import axios from "axios";
import parseHttpResponse from "./parseHttpResponse";

const request = (requestOptions, customMapperFn) => {
  return axios(requestOptions).then(parseHttpResponse(customMapperFn));
};

export default {
  request
};
