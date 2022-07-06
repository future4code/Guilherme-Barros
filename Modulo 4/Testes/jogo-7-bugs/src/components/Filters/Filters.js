import React, { useContext, useEffect } from "react";
import { FiltersContainer } from "./styled";
import GlobalStateContext from "../../global/GlobalStateContext";

const Filters = () => {
  const { states, setters } = useContext(GlobalStateContext);

  const setFilter = (filterToSet) => (event) => {
    setters.setFilters({
      [filterToSet]: event.target.value
    });
  };

  return (
    <FiltersContainer>
      <input
        placeholder="Mínimo"
        type="number"
        onChange={setFilter("minValue")}
        value={states.filters.minValue}
      />
      <input
        placeholder="Máximo"
        type="number"
        onChange={setFilter("maxValue")}
        value={states.filters.maxValue}
      />
      <input
        placeholder="Nome"
        onChange={setFilter("name")}
        value={states.filters.name}
      />
    </FiltersContainer>
  );
};

export default Filters;
