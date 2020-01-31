import React from 'react';
import { Card, Divider, Container, Icon, Label, Segment } from 'semantic-ui-react';


export default function LocationCard ({ lName, lType, lDimension, lResidents }) {
  // image={image}
  return (
    
    <Card.Group>
      <Card >
    <Card.Content>
  
  <Card.Header>{lName}</Card.Header>
  <Card.Description>
    <p>{lType} {lDimension}</p>
    </Card.Description>
    </Card.Content>
    <Divider />
    
    <Label attached='bottom right'>
      {lResidents.length} residents
      </Label>
      
    
  
 
  </Card>
  </Card.Group>
  
  )
}
