// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";

import Credits from "./pages/Credits"; // Correct import path
import Landing from "./pages/Landing";
import Template_Page from "./pages/template_page";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Landing />} />

          <Route exact path="/credits" element={<Credits />} />
          <Route exact path="/choose-template" element={<Template_Page />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
