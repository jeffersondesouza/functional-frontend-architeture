import Maybe from "../../utils/monads";

export default state =>
  Maybe.of(state)
    .map(data => data.beers)
    .map(data => data.filteredList)
    .get([]);
