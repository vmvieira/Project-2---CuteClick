import React from "react";
import { Link } from "react-router-dom";
import { Container, CardDeck, Card } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog, faCat } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as GitSvg } from "./github-brands.svg";

import MenuBar from "./MenuBar";

const About = () => {
  return (
    <div>
      <MenuBar />
      <Container>
        <h2 className="text-primary my-4 text-center">
          <FontAwesomeIcon icon={faCat} size="1x" color="dodgerblue" />
          <span className="mx-1"></span> About Us<span className="mx-1"></span>{" "}
          <FontAwesomeIcon
            icon={faDog}
            size="1x"
            color="dodgerblue"
            flip="horizontal"
          />
        </h2>
        <hr className="border-primary bg-primary my-5" />
        <CardDeck className="text-center my-3">
          <Card className="border-primary">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon icon={faCat} size="4x" color="dodgerblue" />{" "}
                <h4 className="text-primary my-4 text-center">Aline Garbin</h4>
              </Card.Title>
              <Link
                to={{ pathname: "https://github.com/IdrissTheCat" }}
                target="_blank"
              >
                <GitSvg className="svg-css" />
              </Link>
            </Card.Body>
          </Card>
          <Card className="border-primary">
            <Card.Body>
              <Card.Title>
                <FontAwesomeIcon
                  icon={faDog}
                  size="4x"
                  color="dodgerblue"
                  flip="horizontal"
                />{" "}
                <h4 className="text-primary my-4 text-center">
                  Vitor Machado Vieira
                </h4>
              </Card.Title>

              <Link
                to={{ pathname: "https://github.com/vmvieira" }}
                target="_blank"
              >
                <GitSvg className="svg-css" />
              </Link>
            </Card.Body>
          </Card>
        </CardDeck>
        <hr className="border-primary bg-primary my-5" />
      </Container>
    </div>
  );
};

export default About;
