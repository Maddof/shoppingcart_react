/*
  The main layout of the site.
  It has a header and a footer that's always on display. The Outlet
  is wrapped inside a <main>.
  View ./routes.jsx for routing inside the Outlet.
*/

import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header.jsx";
import Footer from "./components/footer/Footer.jsx";

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
