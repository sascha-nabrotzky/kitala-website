import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Blog from "./components/blog";
import Mitglieder from "./components/mitglieder";
import Wissen from "./components/faq";
import Download from "./components/download";
import Header from "./components/header";
import Footer from "./components/footer";
import Impressum from "./components/impressum";
import Datenschutz from "./components/datenschutz";
import Inklusion from "./components/inklusion";
import ToTopButton from "./components/ToTopButton";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/mitglieder" element={<Mitglieder />} />
        <Route exact path="/inklusion" element={<Inklusion />} />
        <Route exact path="/faq" element={<Wissen />} />
        <Route exact path="/download" element={<Download />} />
        <Route path="/impressum" element={<Impressum />} />
        <Route path="/datenschutz" element={<Datenschutz />} />
      </Routes>
      <ToTopButton />
      <Footer />
    </Router>
  );
}

export default App;
