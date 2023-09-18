import React from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Mics from "./Components/Mics";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="min-h-screen w-full relative font-spaceGrotesk bg-[#2D2D5E] text-white">
      {/* <Header /> */}
      <Hero />
      <About />
      <Mics />
      <Footer />
    </div>
  );
}

export default App;
