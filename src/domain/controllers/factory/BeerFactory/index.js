// @flow

import type { Beer } from "./../../../types/Beer";

export const toRequest = (data: any) => ({
  id: data,
  id_value: data
});

export default (data: Object): Beer => ({
  id: data.id,
  name: data.name,
  tagline: data.tagline,
  imageUrl: data.imageUrl,
  description: data.description,
  abv: data.abv
});
