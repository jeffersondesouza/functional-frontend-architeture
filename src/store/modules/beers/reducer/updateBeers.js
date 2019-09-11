export default (state, action) => ({
  ...state,
  beersList: [...action.payload],
  filteredList: [...action.payload],
  total: action.payload.length
});
