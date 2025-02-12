import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route  } from "react-router";
import './index.css'
import App from './App.jsx'
import Blog from "./pages/Blog.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contact from "./pages/Contact.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/about" element={<AboutUs />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  </BrowserRouter>
);
