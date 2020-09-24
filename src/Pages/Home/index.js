import React, {useState, useEffect} from 'react';

import api from '../../service'

import {Container, Card} from './style'

const Home = () => {
  const [character, setCharacter] = useState([]);
  console.log(character);

  useEffect(() => {
    const getData = async () => {
      const response =  await api.get('charizard');

      setCharacter({
        name: response.data.name,
        sprites: response.data.sprites.other.dream_world.front_default
      });
    }

    getData()
  }, []);

  return (
   
    <Container>
      <Card>
        <h1>{character.name}</h1>
        <img src={character.sprites} alt="Foto Charizard"/>
      </Card>
    </Container>
   
    
  ) 
}

export default Home;
