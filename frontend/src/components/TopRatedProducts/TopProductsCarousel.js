import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import { listOfTopRatedProducts } from "../../redux/actions/productActions";
import "./topratedproducts.scss";

const TopProductsCarousel = () => {
  const dispatch = useDispatch();
  const topRatedProducts = useSelector((state) => state.topRatedProducts);
  const { products } = topRatedProducts;

  useEffect(() => {
    dispatch(listOfTopRatedProducts());
  }, [dispatch]);

  return (
    <>
      <Carousel pause="hover" className="bg-dark">
        {products.map((product) => (
          <Carousel.Item key={product._id}>
            <Link to={`/product/${product._id}`}>
              <Image src={product.image} alt={product.name} fluid></Image>
              <Carousel.Caption className="carousel-caption">
                <h2>
                  {product.name} ({product.price})
                </h2>
              </Carousel.Caption>
            </Link>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default TopProductsCarousel;
