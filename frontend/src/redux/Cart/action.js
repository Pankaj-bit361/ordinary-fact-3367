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

  let token=JSON.parse(localStorage.getItem("token"))
    dispatch(getCartProductsRequestAction());
   return axios
     .get("https://distinct-blue-blazer.cyclic.app/cart",{
      headers:{
        Authorization:`Bearer ${token}`
    }
     })
     .then((res) => {
       console.log(res.data,"line 29")
       dispatch(getCartProductsSuccessAction(res.data));
     })
     .catch((err) => {
       dispatch(getCartProductsFailureAction());
     });
};

export const postCartRequest = (payload) => (dispatch) => {
  
let token=JSON.parse(localStorage.getItem("token"))
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

  let token=JSON.parse(localStorage.getItem("token"))
    dispatch(getCartProductsRequestAction());
    return axios
      .delete(`https://distinct-blue-blazer.cyclic.app/cart/delete/${id}`,{
        headers:{
          Authorization:`Bearer ${token}`
      }
      })
      .then((res) => {
        console.log(res)
        dispatch(DeleteCartSuccess());
      })
      .catch((err) => {
        dispatch(getCartProductsFailureAction());
      });
  
  }

export const updateCartdata = (id,payload) => (dispatch) => {
  
let token=JSON.parse(localStorage.getItem("token"))
  console.log("hello",id,payload)
    dispatch(getCartProductsRequestAction());
    return axios
      .patch(`https://distinct-blue-blazer.cyclic.app/cart/update/${id}`,payload,{
        headers:{
          Authorization:`Bearer ${token}`
      }
      })
      .then((res) => {
        console.log(res.data.data,"line71 please check")
        dispatch(updateCartSuccess(res.data.data));
        getCartProducts()
      })
      .catch((err) => {
        dispatch(getCartProductsFailureAction());
      });
  
  }

