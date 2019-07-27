import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Divider, Container } from 'semantic-ui-react';
import CharacterCard from './CharacterCard';


export default function CharacterList(props) {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(res => {
        
        const character= res.data.results;
        setData(character)
        console.log('res', res.data)
        console.log('character', character)
        // console.log('data', res.data.name)
      })
     console.log('Herro')
    }

    getChars();
  }, [])
  // const {name, status}= chars;

  return (
    <Container className="container-cards">
  <section className='character-list grid-view'>
   { data.map(character =>{
     return (
      // <h2>TODO: `array.map()` over your state here!</h2>
    <CharacterCard 
    cImg={character.image}
     cName={character.name}
     cSpecies ={character.species}
     cStatus={character.status} 
     cLocation={character.location.name}
     cOrigin={character.origin.name}
     cEpisode={character.episode}
     />
     )
    })}
    
    </section>
    </Container>)
}

// function CharsDeets({chars}) {
//   // const {name, location, episodes}= chars;
//   return (
//     // <Link to={``} >
//    <div>
//      <div>Name: </div>
//      <div>Name: </div>
//      <div>Location: </div>
//      <div>Episodes: </div>
//    </div>
//   //  </Link>

//   );
// }
