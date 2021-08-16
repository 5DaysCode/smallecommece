import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Card } from "react-bootstrap";

import { useDispatch, useSelector } from "react-redux";
import { listOfProductsInCategory } from "../../redux/actions/productActions";

const ProductsInCategoryUI = ({ match, history }) => {
  const dispatch = useDispatch();
  const productsInCategoryList = useSelector(
    (state) => state.productsInCategoryList
  );
  const { productsinCategory } = productsInCategoryList;

  useEffect(() => {
    dispatch(listOfProductsInCategory(match.params.categoryKeyword));
  }, [dispatch, match]);

  return (
    <>
      {productsinCategory.map((product) => (
        <Card className="my-3 p-3 mx-auto my-2" style={{ width: "30%" }}>
          <Link to={`/product/${product._id}`}>
            <Card.Img
              style={{ width: "30%" }}
              src={product.image}
              variant="top"
            />
          </Link>
          <Card.Body>
            <Link to={`/product/${product._id}`}>
              <Card.Title as="div">
                <strong>{product.name}</strong>
              </Card.Title>
            </Link>
            <Card.Text as="div"></Card.Text>

            <Card.Text as="h3">${product.price}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};

export default ProductsInCategoryUI;
