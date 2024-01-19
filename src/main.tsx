import "./index.css";
// deps
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { initReactI18next } from "react-i18next";
import i18n from "i18next";
import React from "react";
import ReactDOM from "react-dom/client";
import Backend from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";
// components
import { NavigationBar } from "./components/NavigationBar";
import { FooterBar } from "./components/Footer";
// pages
import { About } from "./pages/About";
import { Consult } from "./pages/Consult";
import { Home } from "./pages/Home";
import { ProductIndex } from "./pages/Product";
import { RCE1U } from "./pages/products/rce1u";
import { Services } from "./pages/Service";
import { Void } from "./pages/Void";

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
        <Route path="/services" element={<Services />}></Route>
        <Route path="/consult" element={<Consult />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/products/rce1u" element={<RCE1U />}></Route>
        <Route path="*" element={<Void />}></Route>
      </Routes>
      <FooterBar />
    </BrowserRouter>
  </React.StrictMode>
);
