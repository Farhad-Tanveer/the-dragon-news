import React, { useContext } from "react";
import logo from "../../../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Image } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { AuthContext } from "../../../../../providers/AuthProvider";

const Header = () => {
  const user = useContext(AuthContext);
  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="" />
        <p className=" text-secondary">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM D, YYYY")}</p>
      </div>
      <div className="d-flex justify-center bg-light mb-4 p-4">
        <Button variant="danger">Danger</Button>
        <Marquee className="text-black" speed={100}>
          <strong>
            I can be a React component, multiple React components, or just some
            text. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt, obcaecati.
          </strong>
        </Marquee>
      </div>
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
            <Nav className="mx-auto ">
              <Nav.Link href="#features">
                <Link to="/">Home</Link>
              </Nav.Link>
              <Nav.Link href="#pricing">About</Nav.Link>
              <Nav.Link href="#pricing">Career</Nav.Link>
            </Nav>
            <Nav className="d-flex justify-content-center align-items-center">
              {user && (
                <Nav.Link href="#deets">
                  <FaUserCircle style={{ fontSize: "2rem" }}></FaUserCircle>
                </Nav.Link>
              )}
              <Nav.Link eventKey={2} href="#memes">
                {user ? (
                  <Button variant="dark">Logout</Button>
                ) : (
                  <Link to="/login">
                    <Button variant="dark">Login</Button>
                  </Link>
                )}
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Header;
