// Write your Character component here
import React, {useState, useEffect} from 'react';
import '../App.css';

function Character({name}) {
const [character, setCharacter] = useState([]);

useEffect(() => {
    const fetchCharacter = (name) =>
fetch('https://swapi.py4e.com/api/people/1/')
.then(response => response.json())
.then(character => {
    console.log(character);
    setCharacter(character.people);
});
fetchCharacter(name);
}, [name])

return (
    <div className="character">
   <div>{character}</div> 
   <p>
       test
   </p>
    </div>
);
}

export default Character;