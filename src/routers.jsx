import { createBrowserRouter, redirect } from "react-router-dom";
import MainLayout from "./layouts/Main";
import Welcome from "./pages/Welcome";
import Home from "./pages/Home";
import Public from "./pages/Public";
import Private from "./pages/Private";
export const router = createBrowserRouter([
  {
    path: "/",
    loader: () => {
      return localStorage.getItem("username") ? redirect("/home") : null;
    },
    element: <Welcome />,
  },
  {
    element: <MainLayout />,
    loader: () => {
      return !localStorage.getItem("username") ? redirect("/") : null;
    },
    children: [
      {
        path: "/home",
        element: <Home />
      },
      {
        path: "/public",
        element: <Public />
      },
      {
        path: "/private/:roomName",
        element: <Private />
      },
    ],
  },
]);
