// Write your Character component here
import React from 'react';
import {Card, CardImg, CardText, CardBody} from 'reactstrap';
import styled from 'styled-components';

// const StyledDiv = styled.div`
// border-style: 15px; 
// `;

function Character({characterData}){
    
    return(
        <div>
        <Card>
        <CardBody body inverse style={{ 
            backgroundColor: 'lightgrey', 
            border: '4px double black',
            marginLeft:'35%',
            marginRight:'35%',
            marginTop: '2%',
            marginBottom: '2%',
            paddingTop: '1%',
            paddingBottom: '1%',
            boxShadow: '5px 10px',

            }}>
        
        <CardImg top width="10%" src="https://www.thesims3.com/sims3_asset/sims3_asset/thumb/shard000/000/082/715/84/original.jpg" alt="Card image cap" />
            <CardText>
            <p>Character: {characterData.name}</p>
            <p>Height: {characterData.height}</p>
            <p>Mass: {characterData.mass}</p>
            <p>Hair Color: {characterData.hair_color}</p>
            <p>Skin Color: {characterData.skin_color}</p>
            <p>Eye Color: {characterData.eye_color}</p>
            <p>Birth Year: {characterData.birth_year}</p>
            <p>Gender: {characterData.gender}</p>

            
            </CardText>
            </CardBody>
        </Card>
        </div>

    )

};


export default Character;