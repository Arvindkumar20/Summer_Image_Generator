import React from "react";
import { Navbar } from "./components/Navbar";
import { QueryForm } from "./pages/QueryForm";
import { Footer } from "./components/Footer";
import History from "./pages/History";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Navbar name={"raj"} age={64} email={"a@gmail.com"} />
        <Routes>
          <Route path="/" element={<QueryForm />} />
          <Route path="/history" element={<History />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}
