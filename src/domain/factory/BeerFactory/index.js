// @flow

import { Maybe } from "../../../utils/functors";

import type { Beer } from "./../../types/Beer";

export default (data: Object): Beer => {
  const dataData = Maybe.of(data).get({});

  return {
    id: dataData.id,
    name: dataData.name,
    tagline: dataData.tagline,
    imageUrl: dataData.imageUrl,
    description: dataData.description,
    abv: dataData.abv
  };
};
