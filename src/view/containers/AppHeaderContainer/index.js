import React from "react";
import { connect } from "react-redux";

import AppHeader from "../../components/AppHeader";
import { selectTotalBeers } from "../../../store/selectors";

const AppHeaderContainer = props => {
  return <AppHeader totalBeers={props.totalBeers} />;
};

const mapStateToProps = state => ({
  totalBeers: selectTotalBeers(state)
});

export default connect(mapStateToProps)(AppHeaderContainer);
