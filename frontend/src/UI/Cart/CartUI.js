import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
      Row,
      Col,
      ListGroup,
      Image,
      Form,
      Button,
      Card,
      
} from "react-bootstrap";


import { addToCart, removeFromCart } from "../../redux/actions/cartActions";

const CartScreen = ({match, location, history}) => {
     return(
           <>
              Your Cart
           </>
     )
}

export default  CartScreen;

