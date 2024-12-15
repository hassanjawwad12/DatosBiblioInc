import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Testmonials from "./components/Testmonials";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/testimonials" element={<Testmonials />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
