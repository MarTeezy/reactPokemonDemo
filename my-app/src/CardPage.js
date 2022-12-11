import React, { useState, useEffect } from 'react';
import { format } from 'react-string-format';
import { useParams } from 'react-router-dom';
import './index.css';

import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function CardPage() {
  const params = useParams();
  const id = params.id;
  const [card, setCard] = useState(null);
  const cardUrl = 'https://api.pokemontcg.io/v2/cards/{0}?apiKey="93649167-bc0e-466a-9b7d-53a8f0729ee8"'

  useEffect(() => {
    fetch(format(cardUrl, id))
      .then((response) => response.json())
      .then((data) => setCard(data.data))
      .catch((error) => {
        console.error('There was an error fetching the data:', error);
      });

  }, []);

  console.log(card)
  if (!card) {
    return <p>Loading...</p>;
  }

  return (
    <Container>
      <Row>
        <Card style={{ width: '18rem' }}>
          <Card.Title className="card-name">{card.name}</Card.Title>
          <Card.Img variant="top" src={`${card.images.small}`} />
        </Card>
      </Row>
    </Container>
  );
}

export default CardPage;