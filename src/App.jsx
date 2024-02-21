import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";
import Credits from "./pages/Credits";

function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/credits" element={<Credits/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
