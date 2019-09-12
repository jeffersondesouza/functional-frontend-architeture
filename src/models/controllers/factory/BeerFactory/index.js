// @flow

import type { Beer } from "./../../../types/Beer";

export default (data: Object): Beer => ({
  id: data.id,
  name: data.name,
  tagline: data.tagline,
  imageUrl: data.imageUrl,
  description: data.description,
  abv: data.abv
});
