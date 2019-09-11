import React from "react";
import { connect } from "react-redux";

import actions from "../../../store/rootActions";

import { FilterBeersForm } from "../../components";

const FilterBeersContainer = () => (
  <>
    <FilterBeersForm />
  </>
);

const mapStateToProps = () => ({});

export default connect(mapStateToProps)(FilterBeersContainer);
