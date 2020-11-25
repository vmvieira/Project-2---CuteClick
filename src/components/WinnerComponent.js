import React from "react";

import { Container, Button } from "react-bootstrap";

const WinnerComponent = (props) => {
  console.log(props);
  function handleClick() {
    props.setToggleForm(false);

    props.setQuizState({
      question1: "",
      question2: "",
      question3: "",
      question4: "",
      question5: "",
      question6: "",
      question7: "",
      winner: "",
    });
  }
  return (
    <Container className="text-center">
      <h1 className="text-primary my-4">You are a {props.winner} !</h1>
      {props.renderImage()}
      <Button
        onClick={handleClick}
        className="my-4"
        variant="outline-primary"
        size="lg"
      >
        <strong> Try again! </strong>
      </Button>
    </Container>
  );
};

export default WinnerComponent;
