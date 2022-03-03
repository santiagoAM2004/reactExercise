import React, {useState} from 'react'

import { Header } from '../Layouts/Header/Header'
import { Footer } from '../Layouts/Footer/Footer'
import { Input } from '../UI/Input/Input'
import { Box } from '../Layouts/Box/Box'

export const RickAndMortyInput = () => {

    const URL = "https://rickandmortyapi.com/api/character?name=";

    const [character, setCharacter] = useState ([]);
  
    function getAPI(event){
    
       fetch(URL+event.target.value)
       .then(response => response.json())
       .then(data => setCharacter(data.results))
     }
  

  return (
    <div>
        <Header />
        <Input search="search a character" nameInput= "searcharacter" events={getAPI} />
        {
            character.map( character => {
                <Box character = {character}/> 
            } )
        }
        <Footer />
    </div>
  )
}
