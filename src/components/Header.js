import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Jumbotron from "react-bootstrap/Jumbotron";

export default function Header() {
  return (
    <>
      <Jumbotron>
        <h1>Software Design in the Era of Cloud</h1>
        <p>Discussing New Trends, Patterns , and  Best Practices</p>
      </Jumbotron>

      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#">Enterprise Academy </Navbar.Brand>
        <Nav>
          <Nav.Link href="/" key="/">
            Sessions
          </Nav.Link>
          <Nav.Link href="/speakers" key="/speakers" eventKey="/speakers">
            Speakers
          </Nav.Link>
        </Nav>
      </Navbar>
    </>
  );
}
