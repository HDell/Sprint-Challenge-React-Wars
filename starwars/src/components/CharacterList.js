import React, {useState, useEffect} from "react";
import CharacterCard from "./CharacterCard";
import {Container, Row, Col} from 'reactstrap';
import styled from 'styled-components'
import axios from "axios"

const Button = styled.button`
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    background: #ed3330;
    padding: 20px;
    border-radius: 5px;
    display: inline-block;
    border: none;
    transition: all 0.4s ease 0s;
    &: hover {
        color: pink;
        border: 2px solid palevioletred;
        background: #fff;
    }
`;

function CharacterList() {

    //State
    const [starWarsEndpoint, setStarWarsEndpoint] = useState("https://lambda-swapi.herokuapp.com/api/people/");
    const [characterData, setCharacterData] = useState([]);
    const [pages, setPages] = useState([]); //pages = [previous, next]


    //Side Effects
    useEffect(() => {
        axios.get(starWarsEndpoint)
            .then((response) => {
                console.log(response);
                setCharacterData(response.data.results);
                setPages([response.data.previous,response.data.next]);
            })
            .catch((error) => {
                console.log("Failed to retrieve data.")
            })
    }, [starWarsEndpoint]);

    //Return
    return (
        <Container>
            <Row>
                {characterData.map((charData, index) => (
                    <CharacterCard name={charData.name} birth_year={charData.birth_year} gender={charData.gender} height={charData.height} mass={charData.mass} hair_color={charData.hair_color} skin_color={charData.skin_color} eye_color={charData.eye_color}/>
                ))}
            </Row>
            <br/>
            <Row>
                <Col>
                    <Button onClick={() => {
                        let prevPage = pages[0];
                        if(prevPage) {
                            console.log("Success! Prev: " + prevPage);
                            setStarWarsEndpoint(prevPage);
                        }
                        else {
                            console.log("Fail! Prev: " + prevPage);
                        }
                    }}>Previous Page</Button>
                </Col>
                <Col>
                    <Button onClick={() => {
                        let nextPage = pages[1];
                        if(nextPage) {
                            console.log("Success! Next: " + nextPage);
                            setStarWarsEndpoint(nextPage);
                        }
                        else {
                            console.log("Fail! Next: " + nextPage);
                        }
                    }}>Next Page</Button>
                </Col>
            </Row>
        </Container>
    )
}

export default CharacterList;