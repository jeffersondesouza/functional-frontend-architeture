import React from "react";
import { connect } from "react-redux";

import actions from "../../../store/rootActions";

import { FilterBeersForm } from "../../components";

const FilterBeersContainer = props => {
  const { dispatchFilterBeers, dispatchLoadMoreBeers } = props;

  return (
    <>
      <FilterBeersForm
        onLoadBeers={dispatchLoadMoreBeers}
        onSearchBeer={dispatchFilterBeers}
      />
    </>
  );
};

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => ({
  dispatchFilterBeers: name => dispatch(actions.beer.filterBeers(name)),
  dispatchLoadMoreBeers: name => dispatch(actions.beer.loadBeersRequest(true))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterBeersContainer);
