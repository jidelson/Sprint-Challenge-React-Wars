import React, {useState, useEffect} from 'react';
import './App.css';
import Character from './components/Character.js';
import axios from 'axios';
import styled from 'styled-components'

const baseURL = 'https://swapi.py4e.com/api/people'

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characterData, setCharacterData] = useState([]);
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  useEffect(() => {
    axios.get(baseURL)
    .then(res => {
      setCharacterData(res.data.results)
      console.log(res.data.results)
    })
    .catch(err => {
      console.log('You have an error.')
    })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>

      {
        characterData.map((characterData, index) => {
          return <Character key={index} characterData={characterData} />
        })
      }

    </div>
  );
}

export default App;
