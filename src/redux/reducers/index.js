import { combineReducers } from "redux";
import { productsReducer, selectedProductsReducer } from "./productReducer";

const reducers = combineReducers({
  allProducts: productsReducer,
});

export default reducers;

