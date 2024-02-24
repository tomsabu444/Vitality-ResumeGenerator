import React from "react";

import NavBar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <NavBar />
      <div>{children}</div>
      <Footer />
    </>
  );
}

export default Layout;
