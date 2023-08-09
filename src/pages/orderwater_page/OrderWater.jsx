import React from "react";
import "./OrderWater.css";

function OrderWater() {
  return (
    <div>
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
      <div className="container-button">
        <button class="start-button">Water Type</button>
      </div>
      <div class="grid-container">
        <div class="grid-item">Column 1</div>
        <div class="grid-item">Column 2</div>
        <div class="grid-item">Column 3</div>
      </div>
    </div>
  );
}

export default OrderWater;
