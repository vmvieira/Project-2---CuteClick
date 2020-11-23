import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { Container, Jumbotron, Button } from "react-bootstrap";

import MenuBar from "./components/MenuBar";
import RandomCute from "./components/RandomCute";

function App() {
  return (
    <div>
      <MenuBar />
      <Container>
        <Jumbotron fluid className="my-5 bg-primary text-white rounded">
          <h1 className="text-center">Choose your cuteness!</h1>
        </Jumbotron>
        <RandomCute />
        <Jumbotron fluid className="my-5 bg-white text-primary rounded">
          <h1 className="text-center">Which animal are you?</h1>
          <Button variant="outline-primary" size="lg" block>
            Take our Quiz!
          </Button>
        </Jumbotron>
      </Container>
    </div>
  );
}

export default App;
