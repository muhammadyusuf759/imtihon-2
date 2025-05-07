import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { router } from "./routers/router";
import { ShopContextProvider } from "./context/shop-context";
 

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ShopContextProvider>
      <RouterProvider router={router} />
    </ShopContextProvider>
  </StrictMode>
);
