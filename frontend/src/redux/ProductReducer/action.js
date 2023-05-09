import * as types from "./actionTypes";
import axios from "axios";
const URL = "https://distinct-blue-blazer.cyclic.app/pharma";
export const getProduct = (params) => (dispatch) => {
	dispatch({ type: types.GET_PRODUCT_REQUEST });
	axios
		.get(URL, params)
		.then((res) => {
			console.log(res,"line 9")
			const total = res.headers["x-total-count"];
			const obj = { total: total, data: res.data };
			dispatch({ type: types.GET_PRODUCT_SUCCESS, payload: obj });
		})
		.catch((err) => {
			dispatch({ type: types.GET_PRODUCT_FAILURE });
		});
};

export const singleData = async (id)  => {
	console.log(id,"signledata")
	return axios
	.get(`https://distinct-blue-blazer.cyclic.app/pharma/${id}`)
	.then((res) => res.data)
	.catch((err) => console.log(err));
};

export const addToCart = (id, data) => (dispatch) => {
	return axios
		.patch(
			`https://distinct-blue-blazer.cyclic.app/cart/${id}`,
			data
		)
		.then((res) => {
			postRequestToCar(res.data);
			// dispatch({ type: types.ADD_TO_CART, payload: res.data });
		})
		.catch((err) => console.log(err));
};

function postRequestToCar(data) {
	return axios
		.post("https://distinct-blue-blazer.cyclic.app/cart", data)
		.then((res) => {
			// console.log(res.data);
				console.log('data posted to the cart');
		})
		.catch((err) => console.log(err));
}

export const deleteCart = (id)=>{
	return axios.delete(`https://obtainable-gray-tenor.glitch.me/cart/${id}`)
	.then((res)=>{
		console.log('data deleted from cart',id);
	})
	.catch((err)=>console.log(err))
}

export const getCart = () => (dispatch) => {
	axios
		.get("https://obtainable-gray-tenor.glitch.me/cart")
		.then((res) => {
			dispatch({ type: types.ADD_TO_CART, payload: res.data });
		})
		.catch((err) => {
		});
}

export const orderPost = (data) => {
	return axios
		.post("https://obtainable-gray-tenor.glitch.me/orders", data)
		.then((res) => {
			console.log(res.data);
		})
		.catch((err) => console.log(err));
}