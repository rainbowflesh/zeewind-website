import { Routes, Route } from "react-router-dom";
// pages
import { About } from "./pages/About";
import { Consult } from "./pages/Consult";
import { Contact } from "./pages/Contact";
import { Home } from "./pages/Home";
import { ProductIndex } from "./pages/Product";
import { RCE1U } from "./pages/products/rce1u";
import { Services } from "./pages/Service";
import { Void } from "./pages/Void";

export const PageRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/consult" element={<Consult />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/products" element={<ProductIndex />}></Route>
      <Route path="/services" element={<Services />}></Route>
      {/* products */}
      <Route path="/products/rce1u" element={<RCE1U />}></Route>
      {/* 404 */}
      <Route path="*" element={<Void />}></Route>
    </Routes>
  );
};
