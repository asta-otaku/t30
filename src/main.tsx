import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./pages/App.tsx";
import Boost from "./pages/dashboard/Boost.tsx";
import Dashboard from "./pages/dashboard/index.tsx";
import Devotionals from "./pages/dashboard/Devotionals.tsx";
import Login from "./pages/auth/Login.tsx";
import Register from "./pages/auth/Register.tsx";
import Verify from "./pages/auth/Verify.tsx";
import "./index.css";

const router = createBrowserRouter([
  // auth routes
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },

  // dashboard routes
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/dashboard/daily",
    element: <Devotionals />,
  },
  {
    path: "/dashboard/daily/boost",
    element: <Boost />,
  },
  {
    path: "*",
    element: "404 Not Found",
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
