import React, { useContext } from "react";
import { Button, Container, Navbar } from "react-bootstrap";
import { FaUserCircle } from "react-icons/fa";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../../../providers/AuthProvider";

const NavigationBar = () => {
  const { user } = useContext(AuthContext);
  return (
    <Container>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        className="mb-5"
      >
        <Container>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Link className="text-decoration-none me-2 text-black" to="/">
                Home
              </Link>
              <Link
                className="text-decoration-none me-2 text-black"
                href="#pricing"
              >
                About
              </Link>
              <Link
                className="text-decoration-none me-2 text-black"
                href="#pricing"
              >
                Career
              </Link>
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center">
              {user && (
                <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
              )}

              {user ? (
                <Button variant="dark">Logout</Button>
              ) : (
                <Link to="/login">
                  <Button variant="dark">Login</Button>
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default NavigationBar;
