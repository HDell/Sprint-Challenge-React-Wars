import React, {useState, useEffect} from "react";
import CharacterCard from "./CharacterCard";
import {Container, Row} from 'reactstrap';

import axios from "axios"

function CharacterList() {
    const starWarsEndpoint = ["https://swapi.co/api/people","https://lambda-swapi.herokuapp.com/api/people/"];

    //State
    const [characterData, setCharacterData] = useState([]);


    //Side Effects
    useEffect(() => {
        axios.get(starWarsEndpoint[1])
            .then((response) => {
                console.log(response);
                setCharacterData(response.data.results);
            })
            .catch((error) => {
                console.log("Failed to retrieve data.")
            })
    }, []);

    //Return
    return (
        <Container>
            <Row>
                {characterData.map((charData, index) => (
                    <CharacterCard name={charData.name} birth_year={charData.birth_year} gender={charData.gender} height={charData.height} mass={charData.mass} hair_color={charData.hair_color} skin_color={charData.skin_color} eye_color={charData.eye_color}/>
                ))}
            </Row>
        </Container>
    )
}

export default CharacterList;