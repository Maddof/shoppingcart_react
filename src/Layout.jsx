import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/header/footer/footer.jsx";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet /> {/* Renders the matched child route */}
      </main>
      <Footer />
    </>
  );
}

export default Layout;
