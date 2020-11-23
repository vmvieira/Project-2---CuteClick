import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { Container, Button, Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

import MenuBar from "./MenuBar";

const RandomCat = () => {
  const [pics, setPics] = useState({
    alt_description: "",
    urls: { regular: "" },
  });

  function handleClick(event) {
    const unsplash = new Unsplash({
      accessKey: "SkcKMOTBL9jchiPGye03WEAsrnd0SdU7K9OBk9w6zjs",
    });
    unsplash.photos
      .getRandomPhoto({ query: "cat" })
      .then(toJson)
      .then((json) => {
        setPics(json);
      });
  }

  return (
    <div>
      <MenuBar />
      <Container>
        <Jumbotron fluid className="my-1 bg-white text-primary rounded">
          <h1 className="text-center">
            <FontAwesomeIcon icon={faCat} size="xl" color="dodgerblue" />
            <span className="mx-2"></span>
            Having what for cuteness today ?<span className="mx-2"></span>
            <FontAwesomeIcon
              icon={faCat}
              size="xl"
              color="dodgerblue"
              flip="horizontal"
            />
          </h1>
        </Jumbotron>

        <Button
          onClick={handleClick}
          className="my-4"
          variant="outline-primary"
          size="lg"
          block
        >
          <strong>A single cat will do...</strong>
        </Button>

        <img
          className="img-fluid rounded mx-auto d-block"
          src={pics.urls.regular}
          alt={pics.alt_description}
        />

        <Button className="my-4" variant="outline-primary" size="lg" block>
          <strong>I want cats for days!</strong>
        </Button>
      </Container>
    </div>
  );
};

export default RandomCat;
