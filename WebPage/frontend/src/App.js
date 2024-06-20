import { Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "./components/main/Main";
import Products from "./components/products/Products";
import Contact from "./components/contact/Contact";
import Research from "./components/research/Research";
import About from "./components/about/About";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/research" element={<Research />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}
