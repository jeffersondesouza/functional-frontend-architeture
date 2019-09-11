import React, { useEffect } from "react";
import { connect } from "react-redux";

import actions from "../../../store/rootActions";
import { selectFilteredBeers } from "../../../store/selectors";

import BeersList from "../../components/BeersList";

const BeersListContainer = props => {
  const { beers, dispatchLoadBeers } = props;

  useEffect(() => {
    dispatchLoadBeers();
  }, [dispatchLoadBeers]);

  return (
    <>
      <BeersList beers={beers} />
    </>
  );
};

const mapStateToProps = state => ({
  beers: selectFilteredBeers(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadBeers: () => dispatch(actions.beer.loadBeersRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(BeersListContainer);
