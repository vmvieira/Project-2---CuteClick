import React, { useState } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { Container, Button, Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";

import MenuBar from "./MenuBar";

const RandomDog = () => {
  const [pics, setPics] = useState([]);

  const [pics2, setPics2] = useState([]);

  const [randomIndex, setRandomIndex] = useState(
    Math.floor(Math.random() * 30)
  );

  function handleClick1() {
    if (pics.length === 0) {
      try {
        const unsplash = new Unsplash({
          accessKey: "SkcKMOTBL9jchiPGye03WEAsrnd0SdU7K9OBk9w6zjs",
        });
        unsplash.photos
          .getRandomPhoto({ query: "dog", count: 30 })
          .then(toJson)
          .then((json) => {
            setPics([...json]);
          });
      } catch (err) {
        console.error(err);
      }
    } else {
      setRandomIndex(Math.floor(Math.random() * 30));
    }
  }

  function handleClick2() {
    if (pics2.length === 0 || pics2.length === 30) {
      try {
        const unsplash = new Unsplash({
          accessKey: "SkcKMOTBL9jchiPGye03WEAsrnd0SdU7K9OBk9w6zjs",
        });
        unsplash.photos
          .getRandomPhoto({ query: "dog", count: 30 })
          .then(toJson)
          .then((json) => {
            setPics2([...json]);
          });
      } catch (err) {
        console.error(err);
      }
    }
  }

  function renderImage() {
    if (pics.length > 0) {
      return (
        <img
          className="img-fluid exampleCover rounded mx-auto d-block"
          src={pics[randomIndex].urls.regular}
          alt="a dog"
        />
      );
    }
  }

  function renderMultipleImages() {
    if (pics2.length > 0) {
      return (
        <div className="row">
          {pics2.map((pic) => (
            <figure key={pic.id} className="col-md-4">
              <img
                src={pic.urls.small}
                alt="an animal"
                className="img-fluid rounded"
              />
            </figure>
          ))}
          ;
        </div>
      );
    }
  }

  return (
    <div>
      <MenuBar />
      <Container>
        <Jumbotron fluid className="my-1 bg-white text-primary rounded">
          <h1 className="text-center">
            <FontAwesomeIcon icon={faDog} size="1x" color="dodgerblue" />
            <span className="mx-2"></span>
            Having what for cuteness today ?<span className="mx-2"></span>
            <FontAwesomeIcon
              icon={faDog}
              size="1x"
              color="dodgerblue"
              flip="horizontal"
            />
          </h1>
        </Jumbotron>

        <Button
          onClick={handleClick1}
          className="mb-4"
          variant="outline-primary"
          size="lg"
          block
        >
          <strong>A single dog will do...</strong>
        </Button>

        {renderImage()}

        <Button
          onClick={handleClick2}
          className="my-4"
          variant="outline-primary"
          size="lg"
          block
        >
          <strong>I want dogs for days !</strong>
        </Button>

        {renderMultipleImages()}
      </Container>
    </div>
  );
};

export default RandomDog;
