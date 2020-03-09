import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

function StarWarsData() {
  const [character, setCharacter] = useState();

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        setCharacter(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);
  return (
    <div>
      <ul>
        <StarWarsCard
          Name={character.name}
          Height={character.height}
          Mass={character.mass}
          Hair_color={character.hair_color}
          Skin_color={character.skin_color}
          Eye_color={character.eye_color}
          Birth_year={character.birth_year}
          Gender={character.gender}
        />
      </ul>
    </div>
  );
}

export default StarWarsData;
