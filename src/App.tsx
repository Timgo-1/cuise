import React from "react";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import HeroSection from "./Components/HeroSection";
import Navigation from "./Components/Navigation";
import BasicConcepts from "./Components/OurBasicConcepts";
import OurSpecialties from "./Components/OurSpecialties";

const App = () => {
  return (
    <React.Fragment>
      <Navigation />
      <HeroSection />
      <OurSpecialties />
      <BasicConcepts />
      <Contact />
      <Footer />
    </React.Fragment>
  );
};

export default App;
