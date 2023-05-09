import React from "react";
import Inventory from "../0883/components/Inventory";
import { Box } from "@chakra-ui/react";
const Category = () => {
	React.useEffect(() => {
		document.title = "Category";
	}, []);
	return (
		<Box bg={'white'} color={'black'}>
			<Inventory />
		</Box>
	);
};

export default Category