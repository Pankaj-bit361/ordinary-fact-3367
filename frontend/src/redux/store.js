<<<<<<< HEAD
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { reducer as productReducer } from "./ProductReducer/reducer";
const rootReducer = combineReducers({
  products: productReducer,
=======
import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { reducer as adminProductReducer } from "./AdminProductReducer/reducer";
import { reducer as usersReducer } from "./UsersReducer/reducer";
import { reducer as orderReducer } from "./OrderReducer/reducer";
import { reducer as ProductReducer } from "./product/reducer";
import {reducer as CartReducer} from "./Cart/reducer"
import {reducer as productReducer} from "./ProductReducer/reducer"
import thunk from "redux-thunk";

const root_reducer = combineReducers({
  adminProductReducer,
  usersReducer,
  orderReducer,
  ProductReducer,
  CartReducer,
  productReducer
>>>>>>> 8d676385e75006d5f85bfd45774952a60f0cce56
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;