// Write your Character component here
import React from 'react';
import {Card, CardImg, CardText, CardBody} from 'reactstrap';

function Character({characterData}){
    
    return(
        <div>
        <Card>
        <CardBody body inverse style={{ backgroundColor: 'white', borderColor: 'black', border: '5px' }}>
        <CardImg top width="3%" src="https://www.thesims3.com/sims3_asset/sims3_asset/thumb/shard000/000/082/715/84/original.jpg" alt="Card image cap" />
            <CardText>
            <div>Character: {characterData.name}</div>
            <div>Height: {characterData.height}</div>
            <div>Mass: {characterData.mass}</div>
            <div>Hair Color: {characterData.hair_color}</div>
            <div>Skin Color: {characterData.skin_color}</div>
            </CardText>
            </CardBody>
        </Card>
        </div>
    )

};


export default Character;