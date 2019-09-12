const byName = name => beer =>
  beer.name.toLowerCase().includes(name.toLowerCase());

export default (state, action) => ({
  ...state,
  filteredList: state.beersList.filter(byName(action.payload))
});
