import React from "react";
import { CardDeck, Card, Button } from "react-bootstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faCat } from "@fortawesome/free-solid-svg-icons";

const RandomCute = () => {
  return (
    <CardDeck className="text-center ">
      <Card className="border-primary">
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon icon={faCat} size="5x" color="dodgerblue" />
          </Card.Title>
          <Button variant="outline-primary">Meow!</Button>
        </Card.Body>
      </Card>
      <Card className="border-primary">
        <Card.Body>
          <Card.Title>
            <FontAwesomeIcon
              icon={faDog}
              size="5x"
              flip="horizontal"
              color="dodgerblue"
            />
          </Card.Title>
          <Button variant="outline-primary"> Bark!</Button>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default RandomCute;
