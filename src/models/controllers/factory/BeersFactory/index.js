// @flow

import type { Beer } from "./../../../types/Beer";
import BeerFactory from "./../BeerFactory";

export default (data: any[]): Beer[] => data.map(BeerFactory);
