import React from "react";
import { Navbar } from "./components/Navbar";
import { QueryForm } from "./pages/QueryForm";
import { Footer } from "./components/Footer";
import History from "./pages/History";

export default function App() {
  return (
    <div className="App">
    
      <Navbar name={"raj"} age={64} email={"a@gmail.com"}/>
     <QueryForm/>
     <History/>
     <Footer/>
    </div>
  );
}
