import React, { useState, useEffect } from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import {
  Link
} from "react-router-dom";

function CardsPage() {
  const [cards, setCards] = useState(null);

  useEffect(() => {
    fetch('https://api.pokemontcg.io/v2/cards/?apiKey="93649167-bc0e-466a-9b7d-53a8f0729ee8"')
      .then((response) => response.json())
      .then((data) => setCards(data))
      .catch((error) => {
        console.error('There was an error fetching the data:', error);
      });

  }, []);

  console.log(cards)
  if (!cards) {
    return <p>Loading...</p>;
  }

  const cardsHtml = []
  cards.data.forEach((data) => {
    const element = (
      <Card style={{ width: '18rem' }}>
        <Card.Title>{data.name}</Card.Title>
        <Card.Img variant="top" src={data.images['small']} />
        <Card.Body>
          <Card.Subtitle className="mb-2 text-muted">{data.types.join(', ')}</Card.Subtitle>
          <Card.Text>
            <p>Average Sell Price: ${data.cardmarket.prices.averageSellPrice}</p>
        </Card.Text>
          <Button href={`cards/${data.id}`} variant="primary">{data.name}</Button>
        </Card.Body>
      </Card>
    );
    cardsHtml.push(element);
  });

  return (
    <Container>
      <Row lg={3}>
        {cardsHtml}
      </Row>
    </Container>
  );
}

export default CardsPage;