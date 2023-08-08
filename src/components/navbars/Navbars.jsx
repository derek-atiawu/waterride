import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

function NavBar() {
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home" style={{ color: "gold" }}>
            {" "}
            WaterRide
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Sign up</Nav.Link>
            <Nav.Link href="#features">Order Water</Nav.Link>
            <Nav.Link href="#pricing">Support</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
