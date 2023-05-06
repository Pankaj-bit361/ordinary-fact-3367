import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "bootstrap-icons/font/bootstrap-icons.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
const theme = extendTheme({
	config: {
		initialColorMode: "dark",
	},
	colors: {
		root: {
			white: "#ffffff",
			black: "#111111",
			pink: {
				50: "#fff5f7",
				100: "#fed7e2",
				200: "#fbb6ce",
				300: "#f687b3",
				400: "#ed64a6",
				500: "#d53f8c",
				600: "#b83280",
				700: "#97266d",
				800: "#702459",
				900: "#521b41",
			},
			green: {
				100: "#c6f6d5",
				200: "#9ae6b4",
				300: "#68d391",
				400: "#48bb78",
				500: "#38a169",
				600: "#2f855a",
				700: "#276749",
				800: "#22543d",
				900: "#1c4532",
			},
		},
	},
});
root.render(
 
<<<<<<< HEAD
  
    <ChakraProvider>  
=======
  <Provider store={store}>
    <ChakraProvider theme={theme}>  
>>>>>>> c480b296f5f0083b0c22a56000dad85839d57adb
    <BrowserRouter>
    <Provider store={store}>
        <App />  
        </Provider>
        </BrowserRouter> 
    </ChakraProvider>


);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
