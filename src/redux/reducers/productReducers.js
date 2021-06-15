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
  CHOOSEN_CATEGORY_PRODUCT_LIST_QUERY_FAIL,
  CHOOSEN_CATEGORY_PRODUCTS_LIST_QUERY,
  CHOOSEN_CATEGORY_PRODUCTS_LIST_QUERY_SUCESS,
} from "../constants/productsConstants";

export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_LIST_QUERY:
      return { loading: true, products: [] };
    case PRODUCTS_LIST_QUERY_SUCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_LIST_QUERY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productListinCategoryReducer = (
  state = { productsinCategory: [] },
  action
) => {
  switch (action.type) {
    case CHOOSEN_CATEGORY_PRODUCTS_LIST_QUERY:
      return { loading: true, productsinCategory: [] };
    case CHOOSEN_CATEGORY_PRODUCTS_LIST_QUERY_SUCESS:
      return { loading: false, productsinCategory: action.payload };
    case CHOOSEN_CATEGORY_PRODUCT_LIST_QUERY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };
    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };
    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCTS_TOP_RATED_QUERY:
      return { loading: true , products: []};
    case PRODUCTS_TOP_RATED_QUERY_SUCESS:
      return { loading: false, products: action.payload };
    case PRODUCT_TOP_RATED_QUERY_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
