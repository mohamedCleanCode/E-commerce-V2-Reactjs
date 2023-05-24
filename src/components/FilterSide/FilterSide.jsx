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
          <Accordion.Header>Brands</Accordion.Header>
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
    </div>
  );
}

export default FilterSide;
