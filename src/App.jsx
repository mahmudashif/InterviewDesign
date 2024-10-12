import React from "react";
import Navbar from "./components/section/Navbar";
import Hero from "./components/section/Hero";
import AboutMe from "./components/section/AboutMe";
import Service from "./components/section/Service";
import MyProject from "./components/section/MyProject";
import Testimonial from "./components/section/Testimonial";
import ContactMe from "./components/section/ContactMe";
import Footer from "./components/section/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutMe />
      <Service />
      <MyProject />
      <Testimonial />
      <ContactMe />
      <Footer />
    </>
  );
};

export default App;
