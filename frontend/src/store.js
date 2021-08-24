import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";


import {
  productListReducer,
  productListinCategoryReducer,
  productDetailsReducer,
  productTopRatedReducer,
} from "./redux/reducers/productReducers";
import { categoryListReducer } from "./redux/reducers/categoryReducers";

import {cartReducer} from "./redux/reducers/cartReducer";


// Combining all reducers  whitch we are needed... 
const reducer = combineReducers({
  productList: productListReducer,
  categoryList: categoryListReducer,
  productDetails: productDetailsReducer,
  productsInCategoryList: productListinCategoryReducer,
  topRatedProducts: productTopRatedReducer,
  cart: cartReducer,
});




//Initializing objects from storage
const cartItemsFromStorage = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];



const initialState = {
    cart:{
       cartItems:cartItemsFromStorage,
    },
};
//////////////////////////////////////////////////////////
const middleware = [thunk];

//creating store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
