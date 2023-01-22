import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Mitglieder from "./pages/mitglieder";
import Wissen from "./pages/faq";
import Download from "./components/download";
import Header from "./components/header";
import Footer from "./components/footer";
import Impressum from "./pages/impressum";
import Datenschutz from "./pages/datenschutz";
import Inklusion from "./pages/inklusion";
import ToTopButton from "./components/ToTopButton";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/mitglieder" element={<Mitglieder />} />
        <Route path="/inklusion" element={<Inklusion />} />
        <Route path="/faq" element={<Wissen />} />
        <Route path="/download" element={<Download />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <ToTopButton />
      <Footer />
    </Router>
  );
};

export default App;
