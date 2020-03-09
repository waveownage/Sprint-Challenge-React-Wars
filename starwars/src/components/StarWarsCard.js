function StarWarsCar(props) {
    return(
    <Card>
            <p>name: {props.character.name}</p>
            <p>height: {props.character.height}</p>
            <p>mass: {props.character.mass}</p>
            <p>gender: {props.character.gender}</p>
            <p>hair color: {props.character.hair_color}</p>  
    </Card>         
    )
}

export default StarWarsCard;