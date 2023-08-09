import React from "react";
import { Container } from "react-bootstrap";
import ".//waterride.css";
import "./waterride.css";

function WaterRide() {
  return (
    <Container className="homeContainer">
      <div className="heading">
        <div class="image-container">
          <img
            src="https://static-cse.canva.com/_next/static/assets/wave_w2881xh801_a775fc2518c0a6ca438299351b5d48a3faf59e7348ac4a6f5f88b3b68fd5a06a.png"
            alt="Background Image"
            class="background-image"
          />
          <div class="text-overlay">
            <h1>WateRiDe</h1>
            <p>Additional text or content.</p>
          </div>
        </div>
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
