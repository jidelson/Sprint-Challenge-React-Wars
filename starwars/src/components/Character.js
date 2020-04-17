// Write your Character component here
import React, {useState, useEffect} from 'react';

function Character() {
const [character, setCharacter] = useState([]);
const fetchUser = ('https://swapi.py4e.com/api/people/1/') =>
.then(response => response.json())
.then(character => {
    console.log(character);
    setUser(character);
})
};

return (
    <div>

    </div>
)

export default Character;