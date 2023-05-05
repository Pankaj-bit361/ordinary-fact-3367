import React from "react";
import Inventory from "../0883/components/Inventory";
const Category = () => {
	React.useEffect(() => {
		document.title = "Category";
	}, []);
	return (
		<>
			<Inventory />
		</>
	);
};

export default Category;