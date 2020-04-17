import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character';
import axios from 'axios';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';




const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [character, setCharacter] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  

  
    useEffect(() => {
        axios.get('https://swapi.py4e.com/api/people/')
    .then(function(response){
        console.log(response.data.results);
        setCharacter(response.data.results);
    })
    .catch(function(error){
      console.log(error);
    })
  }, [])
  


  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
      <div>
      <Button color="danger">Click!</Button>
      </div>
      <div>
      {character.map((characterData, index) =>
    {
      return <Character key={index} character={characterData}/>
    }
    )}
      </div>

    
    </div>
  );
};

export default App;

