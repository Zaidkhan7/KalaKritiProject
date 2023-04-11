import { Route, Routes } from "react-router-dom";
import { Constants } from "./Constants";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
import Register from "./pages/Register";

export const RouteMapping = () => {
  const { ROUTES } = Constants;
  return (
    <Routes>
    <Route path={ROUTES.HOME} element={<Home />} />
      <Route path={ROUTES.LOGIN} element={<Login />} />
      <Route path={ROUTES.PRODUCT} element={<Product />} />
      <Route path={ROUTES.PRODUCTLIST} element={<ProductList />} />
      <Route path={ROUTES.CART} element={<Cart />} />
      <Route path={ROUTES.REGISTER} element={<Register />} />

    </Routes>

  );

};