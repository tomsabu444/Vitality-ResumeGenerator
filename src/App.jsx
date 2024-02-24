// App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Credits from './pages/Credits'; // Correct import path


function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route exact path="/credits" element={<Credits />} />

        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
