import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

import "./productCategory.scss";

const ProductCategory = ({ category, history }) => {
  const [categoryKeyword, setKeyword] = useState("");

  return (
    <Container>
      <Row>
        <Col className=".col-xs-6 .col-sm-3">
          <Card>
        
              <Link
                to={`/category/${category.name}`}
                type="submit"
                onClick={() =>
                  setKeyword({
                    categoryKeyword: category.name,
                  })
                }
              >
             
              </Link>
              <Card.Body>
                <Link to={`/category/${category.name}`}>
                  <Card.Title as="div">
                    <strong>{category.name}</strong>
                  </Card.Title>
                </Link>
                <Card.Text as="div"></Card.Text>
              </Card.Body>
         
          </Card>
        </Col>
        <Col></Col>
      </Row>
    </Container>
  );
};

export default ProductCategory;
