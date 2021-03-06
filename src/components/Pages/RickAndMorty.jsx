import React, {useState} from 'react'

import { Header } from '../Layouts/Header/Header'
import { Footer } from '../Layouts/Footer/Footer'
import { Buttons } from '../UI/Buttons/Buttons'
import { Box } from '../Layouts/Box/Box'


export const RickAndMorty = () => {
  
  const URL = "https://rickandmortyapi.com/api/character";

  const [character, setCharacter] = useState ([]);

  function getAPI(){
     fetch(URL)
     .then(response => response.json())
     .then(data => setCharacter(data.results)
     )
     
   }
  return (
    <div className='container'>
        <Header />
        <Buttons nameButton ="START" styleButton ="button1" events={getAPI} />
        <div className='cards-container'>
          {
            character.map((character) =>
              <Box 
                idCharacter={character.id}
                nameCharacter={character.name}
                imgCharacter = {character.image}
              />  
            )
          }
        </div> 
        <Footer /> 
    </div>
  )
}
