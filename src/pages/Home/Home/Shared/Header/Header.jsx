import React, { useContext } from "react";
import logo from "../../../../../assets/logo.png";
import moment from "moment";
import { Button, Container, Image } from "react-bootstrap";
import Marquee from "react-fast-marquee";

const Header = () => {
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
    </Container>
  );
};

export default Header;
