import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Homepage from "./components/Homepage";
import AnimalQuiz from "./components/AnimalQuiz";
import RandomCat from "./components/RandomCat";
import RandomDog from "./components/RandomDog";
import About from "./components/About";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/random-cat" component={RandomCat} />
        <Route exact path="/random-dog" component={RandomDog} />
        <Route exact path="/quiz" component={AnimalQuiz} />
        <Route exact path="/about" component={About} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
