import { Form } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import "./FilterSide.css";

function FilterSide({ title, links }) {
  return (
    <div className="filter-side">
      <Accordion className="border-top" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Category</Accordion.Header>
          <Accordion.Body>
            <ul>
              <li>Mobile accessory</li>
              <li>Moder Tech</li>
              <a href="/">See all</a>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="border-top" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Brands</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Check type="checkbox" label={`Sammsung`} id={`Sammsung`} />
              <Form.Check type="checkbox" label={`Apple`} id={`Apple`} />
              <a href="/">See all</a>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="border-top" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Features</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Check
                type="checkbox"
                label={`Large memory`}
                id={`Large memory`}
              />
              <Form.Check
                type="checkbox"
                label={`Super Power`}
                id={`Super Power`}
              />
              <a href="/">See all</a>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="border-top" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Price Rang</Accordion.Header>
          <Accordion.Body>
            <Form>
              from <input type="number" min="1" /> <br />
              to <br />
              <input type="number" min="1" />
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <Accordion className="border-top" defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Ratings</Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form.Check type="checkbox" label={`1 star`} id={`1 star`} />
              <Form.Check type="checkbox" label={`2 star`} id={`2 star`} />
              <Form.Check type="checkbox" label={`3 star`} id={`3 star`} />
              <Form.Check type="checkbox" label={`4 star`} id={`4 star`} />
              <Form.Check type="checkbox" label={`5 star`} id={`5 star`} />
            </Form>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
}

export default FilterSide;
