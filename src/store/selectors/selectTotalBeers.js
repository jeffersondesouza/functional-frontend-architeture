import { Maybe } from "../../utils/functors";

export default state =>
  Maybe.of(state)
    .map(data => data.beers)
    .map(data => data.total)
    .get(0);
