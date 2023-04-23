import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Footer from "../pages/Home/Home/Shared/Footer/Footer";
import Header from "../pages/Home/Home/Shared/Header/Header";
import LeftNav from "../pages/Home/Home/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Home/Home/Shared/RightNav/RightNav";

const NewsLayout = () => {
  return (
    <div>
      <Header></Header>
      <Container>
        <Row>
          <Col lg={9}>
            <Outlet></Outlet>
          </Col>
          <Col lg={3}>
            <RightNav></RightNav>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default NewsLayout;
