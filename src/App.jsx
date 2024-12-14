import React from "react";
import Navbar from "./components/navbar";
import Katagory from "./components/showcase";
import Prodajt from "./components/prodajt";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <Navbar />
      <Katagory />
      <Prodajt />
      <Footer />
    </>
  );
}

export default App;
