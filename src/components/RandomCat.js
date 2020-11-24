import React, { useState, useEffect } from "react";
import Unsplash, { toJson } from "unsplash-js";
import { Container, Button, Jumbotron } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCat } from "@fortawesome/free-solid-svg-icons";

import MenuBar from "./MenuBar";

const RandomCat = (props) => {
  const [pics, setPics] = useState([{}]);

  useEffect(() => {
    async function fetchData() {
      try {
        const unsplash = new Unsplash({
          accessKey: "SkcKMOTBL9jchiPGye03WEAsrnd0SdU7K9OBk9w6zjs",
        });
        await unsplash.photos
          .getRandomPhoto({ query: "cat", count: 30 })
          .then(toJson)
          .then((json) => {
            setPics(json);
          });
      } catch (err) {
        console.error(err);
      }
    }
    fetchData();
  }, [props]);

  console.log(pics);
  // function handleClick() {}

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
          // onClick={handleClick}
          className="my-4"
          variant="outline-primary"
          size="lg"
          block
        >
          <strong>A single cat will do...</strong>
        </Button>

        {/* <img
          className="img-fluid rounded mx-auto d-block"
          src={pics[Math.floor(Math.random() * 30)].urls.regular}
          alt="a cat"
        /> */}

        <Button className="my-4" variant="outline-primary" size="lg" block>
          <strong>I want cats for days!</strong>
        </Button>
      </Container>
    </div>
  );
};

export default RandomCat;
