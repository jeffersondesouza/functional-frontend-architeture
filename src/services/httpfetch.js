import axios from "axios";

import HttpResponseFactory from "../domain/factory/HttpResponseFactory";

/**
 * 
 * @param {*} requestOptions 
 * @param {*} customMapperFn 
 */
const request = (requestOptions, customMapperFn) => {
  return axios(requestOptions).then(HttpResponseFactory(customMapperFn));
};

export default {
  request
};
