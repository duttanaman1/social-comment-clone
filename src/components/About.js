import React, { useState } from "react";
import Footer from "./Footer";
import Button from "@material-ui/core/Button";
import "./AboutHeader.css";

function About() {
  return (
    <div style={{ textAlign: "left" }}>
      <span className="header">
        <strong>
          Don't worry.
          <br />
          We are here for every solution.
        </strong>
      </span>
      <p className="body">
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type.
      </p>
      <Button
        variant="contained"
        color="primary"
        className="ml-auto px-5"
        style={{ borderRadius: "25px" }}
      >
        <strong>Get Started</strong>
      </Button>
      <Button
        variant=""
        color="primary"
        className="ml-auto px-5"
        style={{ borderRadius: "25px" }}
      >
        <strong color="primary">
          <i class="fa-solid fa-play"></i>Watch video
        </strong>
      </Button>
      <br />
      <Footer />
    </div>
  );
}

export default About;
