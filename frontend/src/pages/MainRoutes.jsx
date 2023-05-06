import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import DashboardMain from "../pages/Admin/DashboardMain";
import ProductList from "../pages/Admin/ProductList";
import AdminAddProduct from "../pages/Admin/AdminAddProduct";
import UserList from "./Admin/UserList";
import AdminEditProduct from "./Admin/AdminEditProduct";
import OrderList from "./Admin/OrderList";

const MainRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<DashboardMain />} />
        <Route path="/product-list" element={<ProductList />} />
        <Route path="/cart" element={<Cart/>}></Route>
        <Route path="/add-product" element={<AdminAddProduct />}></Route>
        <Route path="/edit-product/:id" element={<AdminEditProduct />}></Route>
        <Route path="/user-list" element={<UserList />} />
        <Route path="/order-list" element={<OrderList />} />
        <Route path='/products' element={<Category />} />
				<Route path='/products/:id' element={<SingleProduct />} />
        {/* <Route path="*" element={<PageNotFound />}></Route> */}
      </Routes>
    </div>
  );
};

export default MainRoute;
