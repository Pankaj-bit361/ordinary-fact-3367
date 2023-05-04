
import { legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { combineReducers } from "redux";
import { reducer as productReducer } from "./ProductReducer/reducer";
const rootReducer = combineReducers({
  products: productReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
export default store;
import {
  legacy_createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from "redux";
import { reducer as adminProductReducer } from "./AdminProductReducer/reducer";
import { reducer as usersReducer } from "./UsersReducer/reducer";
import { reducer as orderReducer } from "./OrderReducer/reducer";
import { reducer as ProductReducer } from "./Product/reducer";

import thunk from "redux-thunk";

const root_reducer = combineReducers({
  adminProductReducer,
  usersReducer,
  orderReducer,
  ProductReducer,
});

const composeEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE_ || compose;

export const store = legacy_createStore(
  root_reducer,
  composeEnhancers(applyMiddleware(thunk))
);

