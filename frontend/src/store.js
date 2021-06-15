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



const reducer = combineReducers({
  productList: productListReducer,
  categoryList: categoryListReducer,
  productDetails: productDetailsReducer,
  productsInCategoryList: productListinCategoryReducer,
  topRatedProducts: productTopRatedReducer
});

const initialState = {};
const middleware = [thunk];

//creating store
const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
