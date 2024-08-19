/*
  The main render. Notice we have CartProvided that wraps everything.
  This is so we can have the cart state global so we can use it
  on every page without needing to pass props around.
*/

import React from "react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import routes from "./routes.jsx";
import { CartProvider } from "./components/cart/cartContext";

const router = createBrowserRouter(routes);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  </StrictMode>
);
