import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

export default class Header extends Component {
  render() {
    return (
      <Navbar className="bg-black">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="text-white text-decoration-none">
              Course.web
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text className="text-white">
              <Link to="Signup" className="text-white mx-3">
                <Button variant="primary">Sign Up</Button>
              </Link>
              <Link to="Login" className="text-white">
                <Button variant="outline-light">Log In</Button>
              </Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}
