import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Divider } from 'semantic-ui-react';
import LocationCard from './LocationCard';


export default function LocationsList(props) {
  // TODO: Add useState to track data from useEffect
  const [data, setData] = useState([]);

  useEffect(() => {
    // TODO: Add AJAX/API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    const getChars = () => {
      axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(res => {
        
        const location= res.data.results;
        setData(location)
        console.log('res', res.data)
        console.log('location', location)
        // console.log('data', res.data.name)
      })
     console.log('Herro')
    }

    getChars();
  }, [])
  // const {name, status}= chars;

  return (
  <section className='character-list grid-view'>
   { data.map(location =>{
     return (
   
    <LocationCard 
    lName={location.name}
    lType={location.type}
    lDimension
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

