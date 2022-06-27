import React, { useEffect, useState } from "react";
import axios from "axios";

const PokeCard = (props) => {
  const [pokemon, setPokemon] = useState({});

  useEffect(
    () => {
      pegaPokemon(props.pokemon);
    },
    [props.pokemon]
  );

  const pegaPokemon = (pokeName) => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokeName}`)
      .then((response) => {
        // guarda as infos do pokemon no estado
        setPokemon(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const pokemonParaRenderizar = pokemon;
  return (
    <div>
      <p>{pokemonParaRenderizar.name}</p>
      <p>{pokemonParaRenderizar.weight} Kg</p>
      {pokemonParaRenderizar.types && <p>{pokemonParaRenderizar.types[0].type.name}</p>}
      {pokemonParaRenderizar.sprites && (
        <img src={pokemonParaRenderizar.sprites.front_default} alt={pokemonParaRenderizar.name} />
      )}
    </div>
  );
};
export default PokeCard