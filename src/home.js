import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";
import About from "./components/About";
import ImageDisp from "./components/ImageDisp";
import Navbar from "./components/Navbar";
function Home() {
  return (
    <div>
      <Navbar />
      <Container className="py-5">
        <Row>
          <Col md={6} sm={12}>
            <About />
          </Col>
          <Col md={6} sm={12} className="d-none d-md-block">
            <ImageDisp />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
