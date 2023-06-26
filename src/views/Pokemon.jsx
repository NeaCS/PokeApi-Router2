import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Pokemon = () => {
  const [allPokemons, setAllPokemons] = useState();
  const [nombrePoke, setNombrePoke] = useState("");
  const navigate = useNavigate()

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/")
      .then((response) => response.json())
      .then((data) => {
        // Do something with the data
        setAllPokemons(data.results);
      })
      .catch((error) => {
        // Handle any errors
        console.error(error);
      });
  }, [nombrePoke]);

  const handleChangePokemon = (e) => {
    setNombrePoke(e.target.value);
  };

  const handleOnClick = () => {
    navigate(`/pokemones/${nombrePoke}`)
  }


  return (
    <div className="pokedex-cover"
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {allPokemons && (
        <select style={{width:"30%"}}className="form-control my-2" onChange={handleChangePokemon}>
          <option value="">Selecciona un Pokemon</option>
          {allPokemons.map((pokemon) => (
            <option key={pokemon.name} value={pokemon.name}>
              {pokemon.name}
            </option>
          ))}
        </select>
      )}
      <Button variant="warning" onClick={handleOnClick}>Buscar</Button>{' '}
    </div>
  );
};

export default Pokemon;
