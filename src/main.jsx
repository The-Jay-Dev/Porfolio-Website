import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider as Router,
} from "react-router-dom";
import App from "./JayDevPorfolio.jsx";
import "./index.css";
import JayDevPorfolio from "./JayDevPorfolio.jsx";
import ProjectRebirth from "./ProjectRebirth.jsx";

const router = createBrowserRouter([
  { path: "/", element: <JayDevPorfolio /> },
  { path: "/projectRebirth", element: <ProjectRebirth /> },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router router={router}></Router>
  </React.StrictMode>
);
