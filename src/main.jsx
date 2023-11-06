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
import playerData from "./Player Data/Stats.js";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route
        path="/kobebryant/:id"
        element={<Kobe />}
        loader={(request) => {
          return playerData[request.params.id];
        }}
      />
      <Route
        path="/michaeljordan/:id"
        element={<Jordan />}
        loader={(request) => {
          return playerData[request.params.id];
        }}
      />
      <Route
        path="/lebronjames/:id"
        element={<LeBron />}
        loader={(request) => {
          return playerData[request.params.id];
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
