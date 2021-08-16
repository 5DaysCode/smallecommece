import React, { useEffect } from "react";

import { Col, Row } from "react-bootstrap";

import Product from "../../components/Product.js";
import ProductCategory from "../../components/ProductCategory/ProductCategory.js";

import { useDispatch, useSelector } from "react-redux";
import { listOfProducts } from "../../redux/actions/productActions";
import { listOfCategorys } from "../../redux/actions/categoryActions";
import TopProductsCarousel from "../../components/TopRatedProducts/TopProductsCarousel.js";
import "./homeui.scss";

const HomeUI = ({ match }) => {
  const keyword = match.params.keyword;
  const dispatch = useDispatch();

  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;

  const productListInCategory = useSelector(
    (state) => state.productsInCategoryList
  );
  const { productsInCategory } = productListInCategory;

  const categoryList = useSelector((state) => state.categoryList);
  const { categorys } = categoryList;

  useEffect(() => {
    dispatch(listOfProducts(keyword));

    dispatch(listOfCategorys());
  }, [dispatch, keyword]);

  return (
    <>
      {/* If not  keyword then show the Carousel*/}
      {/* {!keyword && <TopProductsCarousel />} */}

      <div className="homeuisection">
        <h1 className="homeuiheading__h1">Our Categorys</h1>
        <Row>
          {categorys.map((category) => (
            <Col key={category.name} className="btn-container">
              <ProductCategory category={category} />
            </Col>
          ))}
        </Row>
      </div>

      <div className="mt-5">
        <h1>Latest Product's</h1>

        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default HomeUI;
