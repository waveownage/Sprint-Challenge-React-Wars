import React from 'react';

const StarWarsCard = props => {
    return(
        <li className="star-card">
            <p>Name: {props.name}</p>
            <p>Height: {props.height}</p>
            <p>Mass: {props.mass}</p>
            <p>Hair_color: {props.hair_color}</p>
            <p>Skin_color: {props.skin_color}</p>
            <p>Eye_color: {props.eye_color}</p>
            <p>Birth_year: {props.birth_year}</p>
            <p>Gender: {props.gender}</p>  
        </li>       
    );
};

export default StarWarsCard;