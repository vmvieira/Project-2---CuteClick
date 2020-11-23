import React from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const MenuBar = () => {
  return (
    <Navbar bg="primary" expand="lg" className="px-5 navbar-dark">
      <Navbar.Brand href="#home">Our Website Title</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#cats">Cats</Nav.Link>
          <Nav.Link href="#dogs">Dogs</Nav.Link>
          <Nav.Link href="#quiz">Quiz</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MenuBar;
