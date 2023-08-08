import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
            style={{ color: "gold" }}
          >
            WaterRide
          </Navbar.Brand>
          <Nav className="me-auto">
            {/* <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link> */}
            <Nav.Link
              onClick={() => {
                navigate("/orderwater");
              }}
            >
              Order Water
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/Support");
              }}
            >
              Support
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
