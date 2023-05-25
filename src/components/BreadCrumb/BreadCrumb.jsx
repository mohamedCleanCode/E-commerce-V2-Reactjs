import { Breadcrumb } from "react-bootstrap";

const BreadCrumb = () => {
  return (
    <Breadcrumb>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item href="/">Clothings</Breadcrumb.Item>
      <Breadcrumb.Item>Men's wear</Breadcrumb.Item>
      <Breadcrumb.Item active>Summer clothings</Breadcrumb.Item>
    </Breadcrumb>
  );
};

export default BreadCrumb;
