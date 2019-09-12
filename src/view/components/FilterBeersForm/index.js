import React from "react";

import "./styles.scss";

const FilterBeersForm = props => {
  const handleSearchBeer = event => props.onSearchBeer(event.target.value);

  return (
    <div className="FilterBeersForm">
      <input
        onKeyUp={handleSearchBeer}
        className="FilterBeersForm__input"
        placeholder="Digite o nome da marvada..."
      />
      <div className="FilterBeersForm__separator">ou</div>
      <button onClick={props.onLoadBeers} className="FilterBeersForm__action">
        Carregar +
      </button>
    </div>
  );
};

export default FilterBeersForm;
