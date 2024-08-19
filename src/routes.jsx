import HomePage from "./pages/Home";
import ShopPage from "./pages/Shop";
import ProductPage from "./pages/Product";
import CartPage from "./pages/Cart";
import ErrorPage from "./pages/ErrorPage";
import Layout from "./Layout";

const routes = [
  {
    path: "/",
    element: <Layout />, // Layout wraps all routes
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <ShopPage />,
      },
      {
        path: "shop/:slug", // Note: A unique URL parameter using the product slug for the product page. Slug should always be unique.
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
    ],
  },
];

export default routes;
