import React from "react";
import { connect } from "react-redux";

import actions from "../../../store/rootActions";

import { FilterBeersForm } from "../../components";

const FilterBeersContainer = props => {
  const { dispatchFilterBeers } = props;

  const handleSearchBeer = name => dispatchFilterBeers(name);

  return (
    <>
      <FilterBeersForm onSearchBeer={handleSearchBeer} />
    </>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchFilterBeers: name => dispatch(actions.beer.filterBeers(name))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBeersContainer);
