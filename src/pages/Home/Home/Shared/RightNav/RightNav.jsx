import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import {
  FaBeer,
  FaFacebook,
  FaGithub,
  FaGofore,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";
import QZone from "../QZone/QZone";
import bg from "../../../../../assets/bg.png";
import { useContext } from "react";
import { AuthContext } from "../../../../../providers/AuthProvider";

const RightNav = () => {
  const { signInWithGoogle, signInWithGithub } = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };
  const handleGithubSignIn = () => {
    signInWithGithub()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
      <h4 className="mt-2">Login With</h4>
      <Button onClick={handleGoogleSignIn} variant="outline-primary">
        <FaGofore className="me-2" />
        Login with Google
      </Button>
      <Button
        onClick={handleGithubSignIn}
        variant="outline-info"
        className="mt-2"
      >
        <FaGithub className="me-2" />
        Login with Github
      </Button>
      <div className="mt-5">
        <h4>Find Us On</h4>
        <ListGroup>
          <ListGroup.Item>
            <FaFacebook className="me-2 text-primary" />
            Facebook
          </ListGroup.Item>
          <ListGroup.Item>
            <FaTwitter className="me-2 text-info" />
            Twitter
          </ListGroup.Item>
          <ListGroup.Item>
            <FaInstagram className="me-2 text-danger" />
            Instagram
          </ListGroup.Item>
        </ListGroup>
      </div>
      <QZone></QZone>
      <div className="mt-3 position-relative">
        <img className="w-100" src={bg} alt="" />
        <div className="text-center position-absolute top-50 start-50 translate-middle">
          <h1 className="text-white">Create an Amazing Newspaper</h1>
          <p className="text-light my-4">
            Discover thousands of options, easy to customize layouts, one-click
            to import demo and much more.
          </p>
          <Button variant="danger">Learn More</Button>
        </div>
      </div>
    </div>
  );
};

export default RightNav;
