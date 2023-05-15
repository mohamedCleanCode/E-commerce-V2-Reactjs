import {
  faCartShopping,
  faHeart,
  faMessage,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
  Button,
  Container,
  Dropdown,
  Form,
  Nav,
  Navbar,
} from "react-bootstrap";
import logo from "../../assets/images/logo-colored.png";

const NavBar = () => {
  return (
    <Navbar bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home" className="me-0" style={{ width: "15%" }}>
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Form className="d-flex" style={{ width: "50%" }}>
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
          />
          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
              All Category
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Button variant="outline-success">Search</Button>
        </Form>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{
            flexGrow: "0",
            width: "30%",
          }}
        >
          <Nav className="m-0">
            <Nav.Link
              href="#home"
              className="d-flex flex-column text-center header-item-color"
            >
              <span>
                <FontAwesomeIcon icon={faUser} />
              </span>
              <span>Profile</span>
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column text-center header-item-color"
            >
              <span>
                <FontAwesomeIcon icon={faMessage} />
              </span>
              <span>Message</span>
            </Nav.Link>
            <Nav.Link
              href="#home"
              className="d-flex flex-column text-center header-item-color"
            >
              <span>
                <FontAwesomeIcon icon={faHeart} />
              </span>
              <span>Orders</span>
            </Nav.Link>
            <Nav.Link
              href="#link"
              className="d-flex flex-column text-center header-item-color"
            >
              <span>
                <FontAwesomeIcon icon={faCartShopping} />
              </span>
              <span>My Cart</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
