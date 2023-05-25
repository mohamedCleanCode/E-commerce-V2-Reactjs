import React from "react";
import { Form } from "react-bootstrap";
import gridView from "../../assets/images/gridview.png";
import listView from "../../assets/images/listview.png";
import "./ProductView.css";

const ProductView = () => {
  return (
    <Form className="d-flex justify-content-between align-items-center product-view">
      <Form.Check
        type="checkbox"
        id={`Verified only`}
        label={`Verified only`}
      />
      <Form.Select>
        <option>Featured</option>
        <option value="1">One</option>
        <option value="2">Two</option>
        <option value="3">Three</option>
      </Form.Select>
      <div className="d-flex align-items-center viwe-controls">
        <div className="active">
          <img src={gridView} alt="" />
        </div>
        <div>
          <img src={listView} alt="" />
        </div>
      </div>
    </Form>
  );
};

export default ProductView;
