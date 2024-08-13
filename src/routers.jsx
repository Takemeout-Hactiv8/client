import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: "/",
        loader: () => {
          return localStorage.getItem("user") ? redirect("/home") : null;
        },
        element: <Welcome />,
      },
      {
        path: "/home",
        loader: () => {
          return !localStorage.getItem("user") ? redirect("/") : null;
        },
        element: <Home />
      },
    ],
  },
]);
