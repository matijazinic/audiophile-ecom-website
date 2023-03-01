import React from "react";
import Footer from "./global/Footer";
import Navbar from "./global/Navbar";

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
