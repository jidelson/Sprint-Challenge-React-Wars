// Write your Character component here
import React from 'react';
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';

function Character({character}) {

  return (
   <div>
       <Card>
       <CardImg top width="100%" src="https://vignette.wikia.nocookie.net/starwars/images/c/cc/Star-wars-logo-new-tall.jpg/revision/latest?cb=20190313021755" alt="Card image cap" />
           <CardBody>
           <CardTitle>STAR WARS CHARACTER!</CardTitle>
     <div>Name: {character.name}</div> 
    <div>Height:  {character.height}</div>
    <div>Mass:  {character.mass}</div>
    <div>Hair Color:  {character.hair_color}</div>
    <div>Skin Color: {character.skin_color}</div>
    <div>Eye Color:  {character.eye_color}</div>
    <div>Gender:  {character.gender}</div>
    </CardBody>
    </Card>
   </div>
  );
}


export default Character;