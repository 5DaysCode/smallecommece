import axios from "axios";

import {
  PRODUCTS_LIST_QUERY,
  PRODUCTS_LIST_QUERY_SUCESS,
  PRODUCT_LIST_QUERY_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCTS_TOP_RATED_QUERY,
  PRODUCTS_TOP_RATED_QUERY_SUCESS,
  PRODUCT_TOP_RATED_QUERY_FAIL,
  CHOOSEN_CATEGORY_PRODUCTS_LIST_QUERY,
  CHOOSEN_CATEGORY_PRODUCTS_LIST_QUERY_SUCESS,
  CHOOSEN_CATEGORY_PRODUCT_LIST_QUERY_FAIL,
} from "../constants/productsConstants";

export const listOfProducts = (keyword = "") => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_LIST_QUERY });
    const { data } = await axios.get(`/api/products?keyword=${keyword}`);
    console.log("Action", data);
    dispatch({
      type: PRODUCTS_LIST_QUERY_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_LIST_QUERY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listProductsDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: PRODUCT_DETAILS_REQUEST });
    const { data } = await axios.get(`/api/products/${id}`);

    dispatch({
      type: PRODUCT_DETAILS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listOfProductsInCategory = (categoryKeyword = "") => async (
  dispatch
) => {
  try {
    dispatch({ type: CHOOSEN_CATEGORY_PRODUCTS_LIST_QUERY });
    const { data } = await axios.get(
      `/api/products/category/?category=${categoryKeyword}`
    );
    console.log("Action", data);
    dispatch({
      type: CHOOSEN_CATEGORY_PRODUCTS_LIST_QUERY_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: CHOOSEN_CATEGORY_PRODUCT_LIST_QUERY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const listOfTopRatedProducts = () => async (dispatch) => {
  try {
    dispatch({ type: PRODUCTS_TOP_RATED_QUERY });
    const { data } = await axios.get(`/api/toprated/top`);

    dispatch({
      type: PRODUCTS_TOP_RATED_QUERY_SUCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: PRODUCT_TOP_RATED_QUERY_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
