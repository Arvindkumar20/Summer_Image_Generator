import React from "react";
import { Navbar } from "./components/Navbar";
import { QueryForm } from "./pages/QueryForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="App">
    
      <Navbar />
     <QueryForm/>
     <Footer/>
    </div>
  );
}
