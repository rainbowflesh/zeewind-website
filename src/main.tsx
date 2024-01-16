import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import { NavigationBar } from "./components/Navbar";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavigationBar />
    <Router />
  </React.StrictMode>
);
