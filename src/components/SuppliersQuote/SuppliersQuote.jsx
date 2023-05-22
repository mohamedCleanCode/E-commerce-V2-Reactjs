import React from "react";
import {
  Button,
  Col,
  Container,
  FloatingLabel,
  Form,
  Row,
} from "react-bootstrap";
import "./SuppliersQuote.css";

const SuppliersQuote = () => {
  return (
    <Container className="suppliers-quote rounded mb-5">
      <Row className="h-100 align-items-center">
        <Col xs="12" md="6">
          <div className="info">
            <h3 className="text-white fs-1">
              An easy way to send requests to all uppliers
            </h3>
            <p className="text-white-50">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              quia eius error unde necessitatibus numquam molestiae, quas
              commodi nihil sed ab animi. Ipsam deleniti non quasi quam ex ut
              tenetur.
            </p>
          </div>
        </Col>
        <Col xs="12" md="6">
          <Form className="bg-white p-3 rounded">
            <h4>Send quote to suppliers</h4>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control type="text" value="What item you need?" disabled />
            </Form.Group>
            <FloatingLabel
              controlId="floatingTextarea2"
              label="Type more details"
            >
              <Form.Control
                as="textarea"
                placeholder="Leave a comment here"
                style={{ height: "100px" }}
              />
            </FloatingLabel>
            <div className="d-flex mt-3">
              <Form.Group className="mb-3 me-3">
                <Form.Select>
                  <option>Quantity</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Select>
                  <option>Pcs</option>
                </Form.Select>
              </Form.Group>
            </div>
            <Button variant="primary" type="submit">
              Send inquiry
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default SuppliersQuote;
