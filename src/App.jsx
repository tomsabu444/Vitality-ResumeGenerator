import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NavBar from "./components/Navbar";


function App() {
  return (
    <>
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
