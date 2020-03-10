import React, { useState, useEffect } from "react";
import axios from "axios";
import StarWarsCard from "./StarWarsCard";

function StarWarsData() {
  const [character, setCharacter] = useState([]);

  useEffect(() => {
    axios
      .get(`https://swapi.co/api/people/`)
      .then(response => {
        console.log(response.data.results);
        console.log(response.data);
        setCharacter(response.data.results);
      })
      .catch(err => console.log(err));
  }, []);

  return (
    <div>
        {character.map(arr => {
            return(
            <ul>
            <StarWarsCard
              name={arr.name}
              height={arr.height}
              mass={arr.mass}
              hair_color={arr.hair_color}
              skin_color={arr.skin_color}
              eye_color={arr.eye_color}
              birth_year={arr.birth_year}
              gender={arr.gender}
            />
            </ul> )

        })}
      
    </div>
  );
}

export default StarWarsData;
