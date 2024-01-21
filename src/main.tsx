import "./tailwind.css";
import "./index.css";
// deps
import { BrowserRouter } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// components
import { NavigationBar } from "./components/NavigationBar";
import { FooterBar } from "./components/Footer";
import { PageRoutes } from "./routes";

i18n
  .use(Backend)
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: "en",
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <NavigationBar />
      <PageRoutes />
      <FooterBar />
    </BrowserRouter>
  </React.StrictMode>
);
