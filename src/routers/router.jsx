import { createBrowserRouter } from "react-router-dom";
import Home from "../page/home";
import Shop from "../page/shop";
import Like from "../page/like";
import MainLayaut from "../components/main-layaut";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayaut />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
      {
        path: "/like",
        element: <Like />,
      },
    ],
  },
]);
