import React from "react";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import ProjSection from "../components/ProjSection";

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <ProjSection />
      <Footer />
    </>
  );
}
