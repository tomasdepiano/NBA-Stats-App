import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Kobe, LeBron, Jordan } from "./Componenets.jsx";
import playerData from "./playerData/Stats.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/kobebryant"
        element={<Kobe />}
        loader={(request) => {
          return playerData[2];
        }}
      />
      <Route
        path="/michaeljordan"
        element={<Jordan />}
        loader={(request) => {
          return playerData[0];
        }}
      />
      <Route
        path="/lebronjames"
        element={<LeBron />}
        loader={(request) => {
          return playerData[1];
        }}
      />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
