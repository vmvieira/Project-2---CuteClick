import React, { useState } from "react";
import MenuBar from "./MenuBar";
import { Container, Form } from "react-bootstrap";

const AnimalQuiz = () => {
  const [quizState, setQuizState] = useState({
    question1: "",
    question2: "",
  });

  const [scoreState, setScoreState] = useState({
    cat: 0,
    dog: 0,
  });

  function incrementCat() {
    setScoreState((...previousState) => previousState.cat + 1);
  }

  function incrementDog() {
    setScoreState((...previousState) => previousState.dog + 1);
  }

  function handleChange(event) {
    setQuizState({
      ...quizState,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  }

  console.log(quizState);

  return (
    <div>
      <MenuBar />
      <Container>
        <h3> Current value for question 1 is : {quizState.question1} </h3>
        <h3> Current value for question 2 is : {quizState.question2} </h3>

        <form>
          <div>
            <label>Do you like being at home?</label>
            <br />
            <label>Yes</label>
            <input
              type="radio"
              value="Yes"
              name="question1"
              onChange={handleChange}
            />

            <label>No</label>
            <input
              type="radio"
              value="No"
              name="question1"
              onChange={handleChange}
            />

            <br />

            <label>Do you like fish?</label>
            <br />
            <label>Yes</label>
            <input
              type="radio"
              value="Yes"
              name="question2"
              checked={quizState.question2 === "Yes"}
              onChange={handleChange}
            />

            <label>No</label>
            <input
              type="radio"
              value="No"
              name="question2"
              checked={quizState.question2 === "No"}
              onChange={handleChange}
            />
          </div>
        </form>

        {/* <Form>
          {["radio"].map((type) => (
            <div key={`default-${type}`} className="mb-3">
              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />

              <Form.Check
                type={type}
                id={`default-${type}`}
                label={`default ${type}`}
              />
            </div>
          ))}
        </Form> */}
      </Container>
    </div>
  );
};

export default AnimalQuiz;
