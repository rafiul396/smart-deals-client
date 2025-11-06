import { createBrowserRouter } from "react-router";
import Root from "../layout/Root";
import Home from "../layout/homelayout/Home";
import AllProduct from "../components/allproduct/AllProduct";
import CreateProduct from "../pages/CreateProduct";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "/all-products",
        element: <AllProduct />,
        loader: () => fetch("http://localhost:3000/products")
      },
      {
        path: "/create-products",
        element: <CreateProduct />
      }
    ]
  },
]);