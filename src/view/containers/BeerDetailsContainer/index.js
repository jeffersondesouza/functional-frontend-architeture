import React, { useEffect } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import actions from "../../../store/rootActions";
import { selectSelectedBeer } from "../../../store/selectors";

import { BeerDetails } from "../../components";

const BeerDetailsContainer = props => {
  const { beer, dispatchLoadBeerDetails } = props;
  const { params } = props.match;

  useEffect(() => {
    dispatchLoadBeerDetails(params.id);
  }, [dispatchLoadBeerDetails, params.id]);

  return (
    <>
      <BeerDetails {...beer} />
    </>
  );
};

const mapStateToProps = state => ({
  beer: selectSelectedBeer(state)
});

const mapDispatchToProps = dispatch => ({
  dispatchLoadBeerDetails: id => dispatch(actions.beer.loadBeerRequest(id))
});

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BeerDetailsContainer)
);
