import { Breadcrumb, Container } from "@chakra-ui/react";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../redux/ProductReducer/action";
// import { ProductCard } from "../0883/components/ProductCard";
import Products from "../0883/components/Products";
import SideBar from "../0883/utils/SideBar";
// import HomePage from "../0603/Components/HomePage";
const Home = () => {
	const dispatch = useDispatch();
    const data=useSelector((state)=>state)
    console.log(data)
	React.useEffect(() => {
		document.title = "Home";
		dispatch(getProduct())
	}, []);
	return (
		<>
			<Container maxW={{ base: "100%", md: "90%", lg: "100%" }} mx='auto'>
				{/* <HomePage/> */}
				<Products/>
				<SideBar/>
			</Container>
		</>
	);
};
export default Home;