import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import appstore from "../../assets/images/Group.png";
import googleplay from "../../assets/images/Group1.png";
import usa from "../../assets/images/US@2x.png";
import logo from "../../assets/images/logo-colored.png";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="bg-white py-5">
        <Container>
          <Row>
            <Col xs="12" md="3">
              <img src={logo} alt="logo" />
              <p className="text-black-50 my-3">
                Best information about the company gies here but now lorem ipsum
                is
              </p>
              <ul className="icons">
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faFacebook} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faTwitter} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faLinkedinIn} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faInstagram} />
                  </a>
                </li>
                <li>
                  <a href="/">
                    <FontAwesomeIcon icon={faYoutube} />
                  </a>
                </li>
              </ul>
            </Col>
            <Col xs="12" md="9">
              <Row className="justify-content-between">
                <Col xs="6" md="3" lg="2">
                  <ul className="links">
                    <h4>About</h4>
                    <li>
                      <a href="/">About us</a>
                    </li>
                    <li>
                      <a href="/">Find store</a>
                    </li>
                    <li>
                      <a href="/">Categories</a>
                    </li>
                    <li>
                      <a href="/">Blogs</a>
                    </li>
                  </ul>
                </Col>
                <Col xs="6" md="3" lg="2">
                  <ul className="links">
                    <h4>Partnership</h4>
                    <li>
                      <a href="/">About us</a>
                    </li>
                    <li>
                      <a href="/">Find store</a>
                    </li>
                    <li>
                      <a href="/">Categories</a>
                    </li>
                    <li>
                      <a href="/">Blogs</a>
                    </li>
                  </ul>
                </Col>
                <Col xs="6" md="3" lg="2">
                  <ul className="links">
                    <h4>Inforamtion</h4>
                    <li>
                      <a href="/">Help center</a>
                    </li>
                    <li>
                      <a href="/">Money refund</a>
                    </li>
                    <li>
                      <a href="/">Shipping</a>
                    </li>
                    <li>
                      <a href="/">Contact us</a>
                    </li>
                  </ul>
                </Col>
                <Col xs="6" md="3" lg="2">
                  <ul className="links">
                    <h4>For users</h4>
                    <li>
                      <a href="/">Login</a>
                    </li>
                    <li>
                      <a href="/">Register</a>
                    </li>
                    <li>
                      <a href="/">Settings</a>
                    </li>
                    <li>
                      <a href="/">My orders</a>
                    </li>
                  </ul>
                </Col>
                <Col xs="6" md="3" lg="2">
                  <ul className="links">
                    <h4>About</h4>
                    <li>
                      <a href="/">
                        <img className="w-100" src={appstore} alt="" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <img className="w-100" src={googleplay} alt="" />
                      </a>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </footer>
      <footer className="copy-right py-4">
        <Container>
          <Row className="justify-content-between">
            <Col xs="3">
              <div>&copy; 2023 Ecommerce.</div>
            </Col>
            <Col xs="3" className="text-end">
              <select name="lang">
                <option value="en">
                  <img src={usa} alt="" />
                  English
                </option>
                <option value="ar">
                  <img src={usa} alt="" />
                  Arabic
                </option>
              </select>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  );
};

export default Footer;
