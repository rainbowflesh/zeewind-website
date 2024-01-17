import React from "react";
import ReactDOM from "react-dom/client";
import { Router } from "./router";
import { NavigationBar } from "./components/NavigationBar";
import "./index.css";
import "./i18n";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NavigationBar />
    <Router />
  </React.StrictMode>
);
