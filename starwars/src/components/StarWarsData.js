import React, { useState, useEffect } from 'react'
import axios from 'axios';

function StarWarsData () {

    const [character, setCharacter] = useState();

    useEffect(() => {
        axios.get(`https://swapi.co/api/people/`)
        .then(response => {
            console.log(response.data);
            setCharacter(response.data.results)
        })
        .catch(err => console.log(err))

    }, []);


}

export default StarWarsData;



