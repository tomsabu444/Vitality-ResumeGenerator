import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
      <Footer/>
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
