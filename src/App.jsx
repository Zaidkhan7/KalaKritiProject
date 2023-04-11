import Product from "./pages/Product";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter } from "react-router-dom";
import { RouteMapping } from "./RouteMapping";


const App = () => {
  return <BrowserRouter>
    <RouteMapping/>
    </BrowserRouter>
};

export default App;