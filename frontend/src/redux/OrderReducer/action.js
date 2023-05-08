import {
  ADMIN_GET_ORDER_FAILURE,
  ADMIN_GET_ORDER_REQUEST,
  ADMIN_GET_ORDER_SUCCESS,
} from "./actionType";
import axios from "axios";
export const getRequestOrder = () => {
  return { type: ADMIN_GET_ORDER_REQUEST };
};
export const getOrderSuccess = (payload) => {
  return { type: ADMIN_GET_ORDER_SUCCESS, payload };
};
export const getFailureOrder = () => {
  return { type: ADMIN_GET_ORDER_FAILURE };
};

export const getOrderData = (dispatch) => {
  dispatch(getRequestOrder());
  axios
    .get(`https://distinct-blue-blazer.cyclic.app/order`)
    .then((res) => {
      dispatch(getOrderSuccess(res.data));
    })
    .catch((e) => {
      dispatch(getFailureOrder());
    });
};
