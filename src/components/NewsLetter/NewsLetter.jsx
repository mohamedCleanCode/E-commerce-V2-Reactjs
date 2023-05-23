import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import SectionTitle from "../SectionTitle/SectionTitle";
import "./NewsLetter.css";

const NewsLetter = () => {
  return (
    <Container className="mb-5 text-center news-letter">
      <SectionTitle title="Subscribe on our newsletter" />
      <p className="text-black-50 fw-bold">
        Get daily news upcomming offers from many suppliers all over the word
      </p>
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Subscribe
        </Button>
      </Form>
    </Container>
  );
};

export default NewsLetter;
