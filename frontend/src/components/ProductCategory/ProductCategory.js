import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

import "./productCategory.scss";

const ProductCategory = ({ category, history }) => {
  const [categoryKeyword, setKeyword] = useState("");

  return (
    <>
      <div className="category-features">
        <div class="row">
          <div class="col-1-of-3">
            <div class="feature-box">
              <i class="feature-box__icon icon-basic-world"></i>
              <h3 class="heading-tertiary u-margin-bottom-small">
                Explore the world
              </h3>
              <p class="feature-box__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus expedita ea corporis perspiciatis.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>

    /* <Row>
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
      </Row> */
    // </Container>
  );
};

export default ProductCategory;
