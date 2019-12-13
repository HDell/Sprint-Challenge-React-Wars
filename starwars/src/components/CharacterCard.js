import React from "react";
import {Card, CardText, CardBody, CardTitle, CardSubtitle, Col} from 'reactstrap';

const CharacterCard = (props) => {
    return (
        <Col sm={{size: 4}}>
            <Card>
                <CardBody>
                    <CardTitle>Name: {props.name}</CardTitle>
                    <CardSubtitle>Birth Year: {props.birth_year}</CardSubtitle>
                    <CardText>Gender: {props.gender}</CardText>
                    <CardText>Height: {props.height}</CardText>
                    <CardText>Mass: {props.mass}</CardText>
                    <CardText>Hair Color: {props.hair_color}</CardText>
                    <CardText>Skin Color: {props.skin_color}</CardText>
                    <CardText>Eye Color: {props.eye_color}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
};

export default CharacterCard;