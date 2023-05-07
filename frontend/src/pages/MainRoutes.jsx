import React from "react";
import { Route, Routes } from "react-router-dom";
<<<<<<< HEAD
import Home from "../pages/Home";
// import DashboardMain from "../pages/Admin/DashboardMain";
// import ProductList from "../pages/Admin/ProductList";
// import AdminAddProduct from "../pages/Admin/AdminAddProduct";
// import UserList from "./Admin/UserList";
// import AdminEditProduct from "./Admin/AdminEditProduct";
// import OrderList from "./Admin/OrderList";
=======
import Home from "./Home";
import DashboardMain from "../pages/Admin/DashboardMain";
import ProductList from "../pages/Admin/ProductList";
import AdminAddProduct from "../pages/Admin/AdminAddProduct";
import UserList from "./Admin/UserList";
import AdminEditProduct from "./Admin/AdminEditProduct";
import OrderList from "./Admin/OrderList";
import Cart from "./Cart";
>>>>>>> 8d676385e75006d5f85bfd45774952a60f0cce56
import Category from "./Category";
import SingleProduct from "../0883/components/SingleProduct";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/admin" element={<DashboardMain />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/add-product" element={<AdminAddProduct />}></Route>
        <Route path="/edit-product/:id" element={<AdminEditProduct />}></Route>
<<<<<<< HEAD
        <Route path="/user-list" element={<UserList />} /> */}
        {/* <Route path="/order-list" element={<OrderList />} /> */}
        <Route path='/products' element={<Category />} />
				<Route path='/products/:id' element={<SingleProduct />} />
				{/* <Route path='/products/cart' element={<CartPage />} /> */}
				<Route path='*' element={<h1>404 Not Found</h1>} />
=======
        <Route path="/user-list" element={<UserList />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path='/products' element={<Category />} />
				<Route path='/products/:id' element={<SingleProduct />} />
>>>>>>> 8d676385e75006d5f85bfd45774952a60f0cce56
        {/* <Route path="*" element={<PageNotFound />}></Route> */}
      </Routes>
    </div>
  );
};

export default MainRoute;
