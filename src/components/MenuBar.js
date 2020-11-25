import React from "react";
import { Navbar, Nav } from "react-bootstrap";

const MenuBar = () => {
  return (
    <Navbar fixed="top" bg="primary" expand="lg" className="px-5 navbar-dark">
      <Navbar.Brand href="/">Our Website Title</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="/random-cat">Cats</Nav.Link>
          <Nav.Link href="/random-dog">Dogs</Nav.Link>
          <Nav.Link href="/quiz">Quiz</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
