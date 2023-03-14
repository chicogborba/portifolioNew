import React from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import "./index.css";
import HomePage from "./pages/HomePage/HomePage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./pages/Projects/Projects";
import ScrollToTop from "./components/ScrollToTop";
import TopNavBar from "./components/TopNavBar";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <HelmetProvider>
    <React.StrictMode>
      <BrowserRouter>
        <ScrollToTop />
        <TopNavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:ProjectId" element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </HelmetProvider>
);
