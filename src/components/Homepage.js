import React from "react";
import { Link } from "react-router-dom";
import { Container, Jumbotron, Button, CardDeck, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faCat } from "@fortawesome/free-solid-svg-icons";

import MenuBar from "./MenuBar";

const Homepage = () => {
  return (
    <div>
      <MenuBar />
      <Container className="mt-3">
        <Jumbotron fluid className="my-5 bg-primary text-white rounded">
          <h1 className="text-center">Choose your cuteness !</h1>
        </Jumbotron>
        <CardDeck className="text-center ">
          <Card className="border-primary">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faCat} size="5x" color="dodgerblue" />
              </Card.Title>
              <Link to="/random-cat">
                <Button variant="outline-primary">Meow !</Button>
              </Link>
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
              <Link to="/random-dog">
                <Button variant="outline-primary"> Bark !</Button>
              </Link>
            </Card.Body>
          </Card>
        </CardDeck>
        <Jumbotron
          fluid
          className="my-3 bg-white text-primary rounded text-center"
        >
          <h1 className="text-center">Which animal are you ?</h1>
          <Link to="/quiz">
            <Button className="my-4" variant="outline-primary" size="lg">
              Take our Quiz !
            </Button>
          </Link>
        </Jumbotron>
      </Container>
    </div>
  );
};

export default Homepage;
