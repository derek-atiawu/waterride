import React from "react";
import "./OrderWater.css";

function OrderWater() {
  return (
    <div>
      <img
        className="image"
        src="https://static-cse.canva.com/_next/static/assets/wave_w2881xh801_a775fc2518c0a6ca438299351b5d48a3faf59e7348ac4a6f5f88b3b68fd5a06a.png"
        alt="bg-img"
      />
      <h3>water type</h3>
      <div className="cards grid-container">
        <div className="grid-item">Sachet Water</div>
        <div className="grid-item"><img src="https://images.unsplash.com/photo-1519455953755-af066f52f1a6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c2FjaGV0JTIwd2F0ZXJ8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=800&q=60" alt="" /> </div>
        <div className="grid-item">Dispenser </div>
      </div>
      
    </div>
  );
}

export default OrderWater;
