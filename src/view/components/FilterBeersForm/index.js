import React from "react";

import "./styles.scss";

const FilterBeersForm = props => {
  return (
    <div className="FilterBeersForm">
      <input
        className="FilterBeersForm__input"
        placeholder="Digite o nome da marvada..."
      />
      <div className="FilterBeersForm__separator">ou</div>
      <button className="FilterBeersForm__action">Carregar +</button>
    </div>
  );
};

export default FilterBeersForm;
