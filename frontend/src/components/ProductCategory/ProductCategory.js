import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Card, Col, Container, Row } from "react-bootstrap";

import "./productCategory.scss";

const ProductCategory = ({ category, history }) => {
  const [categoryKeyword, setKeyword] = useState("");

  return (
    <>
      <Container>
        <Row>
          <Col className=".col-xs-6 .col-sm-3">
            <div class="category-box">
              <h3 class="heading-tertiary u-margin-bottom-small">
                <div className="link-p">
                  <Link to={`/category/${category.name}`}>
                    <strong>{category.name}</strong>
                  </Link>
                </div>
              </h3>
              <p class="feature-box__text"></p>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductCategory;
