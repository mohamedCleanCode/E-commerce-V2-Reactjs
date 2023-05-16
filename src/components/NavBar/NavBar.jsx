import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav } from "react-bootstrap";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar bg-white">
      <Container>
        <Nav className="align-items-center">
          <Nav.Item as="li">
            <Nav.Link>
              <FontAwesomeIcon className="me-2" icon={faBars}></FontAwesomeIcon>
              All category
            </Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Hot offers</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Gift Boxes</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Projects</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Nav.Link>Menu item</Nav.Link>
          </Nav.Item>
          <Nav.Item as="li">
            <select name="filter" id="">
              <option value="#">Help</option>
              <option value="#">One</option>
              <option value="#">Two</option>
              <option value="#">Three</option>
            </select>
          </Nav.Item>
        </Nav>
        <div>
          <select name="filter" id="" className="me-4">
            <option value="#">English, USD</option>
            <option value="#">Arabic, LE</option>
          </select>
          <select name="filter" id="">
            <option value="#">Ship to img</option>
            <option value="#">Ship to img</option>
          </select>
        </div>
      </Container>
    </div>
  );
};

export default NavBar;
