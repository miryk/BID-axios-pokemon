import axios from 'axios';
import React, { useEffect, useState } from 'react'

const PokemonComponent = (props) => {

  const [responseData, setResponseData] = useState([]);

  useEffect(() => {
    var config = {
      method: 'get',
      url: 'https://pokeapi.co/api/v2/pokemon?limit=807',
      headers: { }
    };

    axios(config)
    .then((response) => {
      const data = response.data.results;
      setResponseData(data.map(pokemon => pokemon.name)); 
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])
  

  return (
    <div>
      <h1>List of Pokemon with Axios!</h1>
      <ol>
      {responseData.map((item, idx) => {
        return <li key={idx}>{item}</li>
      })}
      </ol>
    </div>
    
  )
}

export default PokemonComponent