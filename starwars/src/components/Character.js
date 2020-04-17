// Write your Character component here
import React from 'react';

function Character({character}) {

  return (
   <div>
       {character.name},
       {character.height},
       {character.mass},
       {character.hair_color},
       {character.skin_color},
       {character.eye_color},
       {character.gender},
       {character.homeworld},
   </div>
  );
}


export default Character;