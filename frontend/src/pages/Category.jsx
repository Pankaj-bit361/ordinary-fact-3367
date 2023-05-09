import React, { useEffect, useState } from "react";
import Inventory from "../0883/components/Inventory";
import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Mobnav from "../components/Mobnav";
import Footer from "../components/Footer";
const Category = () => {

	const [windowDimension, detectHW] = useState({
		winWidth: window.innerWidth,
	  });
	
	  const detectSize = () => {
		detectHW({
		  winWidth: window.innerWidth,
		});
	  };
	  useEffect(() => {
		window.addEventListener("resize", detectSize);
	
		return () => {
		  window.removeEventListener("resize", detectSize);
		};
	  }, [windowDimension])
	
	  console.log(windowDimension.winWidth);
	

	React.useEffect(() => {
		document.title = "Category";
	}, []);
	return (
		<Box>
		{windowDimension.winWidth>767?<Navbar/>:<Mobnav/>}
		<Box bg={'white'} color={'black'}>
			<Inventory />
		</Box>
		<Footer/>
		</Box>
	);
};

export default Category