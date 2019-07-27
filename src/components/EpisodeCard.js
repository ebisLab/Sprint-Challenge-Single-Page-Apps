import React from 'react';
import { Card, Divider, Container, Icon, Label, Segment } from 'semantic-ui-react';


export default function EpisodeCards ({ eName, eDate, episd }) {
  return (
    <Card.Group>
    <Card >
  <Card.Content>


    <Card.Header>{eName}</Card.Header>
    <Card.Description><p>{eDate}</p>
    <p>{episd}</p></Card.Description>
  
    </Card.Content>
      </Card >
      </Card.Group>
    )
}

