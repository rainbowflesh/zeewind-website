import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import { NavigationBar } from "./components/NavigationBar";
import Backend from "i18next-http-backend";
import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import React from "react";
import ReactDOM from "react-dom/client";

import { Home } from "./pages/Home";
import { Void } from "./pages/Void";
import { ProductIndex } from "./pages/products/ProductIndex";
import { RCE1U } from "./pages/products/rce1u";

import "./index.css";
import { FooterBar } from "./components/Footer";

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
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<ProductIndex />}></Route>
        <Route path="/products/rce1u" element={<RCE1U />}></Route>
        <Route path="*" element={<Void />}></Route>
      </Routes>
      <FooterBar />
    </BrowserRouter>
  </React.StrictMode>
);
