import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { Divider, Container } from 'semantic-ui-react';
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
    <Container className="container-cards">
  <section className='character-list grid-view'>
   { data.map(location =>{
     return (
    <LocationCard 
    lName={location.name}
    lType={location.type}
    lDimension={location.dimension}
    lResidents={location.residents}
     />
     )
    })}
    
    </section>
    </Container>)
}

