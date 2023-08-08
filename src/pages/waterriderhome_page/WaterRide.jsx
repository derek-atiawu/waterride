import React from "react";
import { Container } from "react-bootstrap";
import ".//waterride.css";

function WaterRide() {
  return (
    <Container className="homeContainer">
      <div className="heading">
        <h1 style={{ color: "gold" }}>Water Supply made quick and easy!</h1>
        <h2 style={{ color: "blue" }}>On your finger tip! Sign up today </h2>
      </div>
      <div className="signup">
        <div className="transporter" style={{ fontWeight: "bold" }}>
          Trasporter Sign Up
        </div>
        <div className="user" style={{ fontWeight: "bold" }}>
          User Sign up
        </div>
      </div>
    </Container>
  );
}

export default WaterRide;
