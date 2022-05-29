import ProductListReducer from "../reducer/ProductListReducer";

import { createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const initialState = { productList: { products: [] } };

const reducer = combineReducers({ productList: ProductListReducer });

const store = createStore(
  reducer,
  initialState,
  compose(applyMiddleware(thunk))
);

console.log("initial state: ", store.getState());

export default store;
