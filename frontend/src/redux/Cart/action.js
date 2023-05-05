import { DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, POST_CART_SUCESS, UPDATE_CART_SUCCESS } from "./actionTypes";
import axios from "axios"

export const getCartProductsRequestAction = () => {
    return { type: GET_CART_REQUEST };
};

export const getCartProductsSuccessAction = (payload) => {
    return { type: GET_CART_SUCCESS, payload };
};

export const getCartProductsFailureAction = () => {
    return { type: GET_CART_FAILURE };
};

export const PostCartSuccess = (payload) => {
    return { type: POST_CART_SUCESS, payload };
};

export const DeleteCartSuccess = () => {
    return { type: DELETE_CART_SUCCESS};
};
export const updateCartSuccess = (payload) => {
  return { type: UPDATE_CART_SUCCESS,payload};
};
export const getCartProducts = () => (dispatch) => {
    dispatch(getCartProductsRequestAction());
   return axios
     .get("https://determined-gold-jaguar.cyclic.app/women?_limit=3")
     .then((res) => {
      // console.log(res.data,"line 29")
       dispatch(getCartProductsSuccessAction(res.data));
     })
     .catch((err) => {
       dispatch(getCartProductsFailureAction());
     });
};

export const postCartRequest = (payload) => (dispatch) => {
    dispatch(getCartProductsRequestAction());
    axios
      .post("https://determined-gold-jaguar.cyclic.app/women", payload)
      .then((res) => {
        console.log(res.data,"line44")
        dispatch(PostCartSuccess(res.data));
      })
      .then((err) => {
        dispatch(getCartProductsFailureAction());
      });
};


export const deleteCartdata = (id) => (dispatch) => {
    dispatch(getCartProductsRequestAction());
    return axios
      .delete(`https://determined-gold-jaguar.cyclic.app/women/${id}`)
      .then((res) => {
        dispatch(DeleteCartSuccess());
      })
      .catch((err) => {
        dispatch(getCartProductsFailureAction());
      });
  
  }

export const updateCartdata = (id,payload) => (dispatch) => {
  console.log("hello",id,payload)
    dispatch(getCartProductsRequestAction());
    return axios
      .patch(`https://determined-gold-jaguar.cyclic.app/women/${id}`,payload)
      .then((res) => {
        console.log(res.data,"line71")
        dispatch(updateCartSuccess(res.data));
        getCartProducts()
      })
      .catch((err) => {
        dispatch(getCartProductsFailureAction());
      });
  
  }

