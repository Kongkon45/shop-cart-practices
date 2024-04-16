import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home";
import Error from "../pages/Error";
import ShoppingCart from "../features/shops/ShoppingCart";
import ProductDetails from "../features/shops/ProductDetails";
import Carts from "../features/shops/Carts";

const router = createBrowserRouter([
    {
        path : "/",
        element : <Main/>,
        children : [
            {
                path : "/",
                element : <Home/>
            },
            {
                path : "*",
                element : <Error/>
            },
            {
                path : "/shop",
                element : <ShoppingCart/>
            },
            {
                path : "/shop/:name/:id",
                element : <ProductDetails/>
            },
            {
                path : "/carts",
                element : <Carts/>
            }
        ]
    }
])

export default router;