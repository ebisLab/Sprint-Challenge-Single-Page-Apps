import React from 'react';
import { Card, Image, Icon } from 'semantic-ui-react'

// export default function CharacterCard ({ cImg, cName, cSpecies, cStatus, cLocation, cOrigin, cType }) {
  
  export default function CharacterCard ({ cImg, cName, cSpecies, cStatus, cLocation, cOrigin, cEpisode }) {
    return (
    <Card >
    <Image src={cImg} />
    <Card.Content>
    <Card.Header>{cName}</Card.Header>
      
    
    <Card.Meta>
      {`${cSpecies} ${cStatus}`} 
      </Card.Meta>
    <Card.Description>
    <p>Location: {cLocation}</p> 
    <p>Origin: {cOrigin}</p> 
    </Card.Description>
    {/* <p>Type: {cType}</p> */}
    </Card.Content>
    <Card.Content extra>
    <Icon name='user' />
      {` ${cEpisode.length} Episodes`}
    </Card.Content>
  </Card> )
}
