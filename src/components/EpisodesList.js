import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import EpisodeCard from './EpisodeCard';


export default function EpisodesList(props) {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      axios
      .get('https://rickandmortyapi.com/api/episode/')
      .then(res => {
        
        const episode= res.data.results;
        setData(episode)
        console.log('res', res.data)
        console.log('episode', episode)
        // console.log('data', res.data.name)
      })
     console.log('Herro')
    }

    getChars();
  }, [])
  // const {name, status}= chars;

  return (
  <section className='character-list grid-view'>
   { data.map(episode =>{
     return (
 
    <EpisodeCard 
    eName={episode.name}
    eDate={episode.air_date}
    episd={episode.episode}
    // cImg={character.image}
    //  cName={character.name}
    //  cSpecies ={character.species}
    //  cStatus={character.status} 
    //  cLocation={character.location.name}
    //  cOrigin={character.origin.name}
     />
     )
    })}
     {/* <CharsDeets /> */}
      {/* <h2>TODO: `array.map()` over your state here!</h2>
      <div>
     <div>Name: </div>
     <div>{props.name} </div>
     <div>Location: </div>
     <div>Episodes: </div> */}
   {/* </div> */}
    </section>)
}

