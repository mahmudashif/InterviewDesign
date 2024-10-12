import React from "react";
import Hero from "../components/section/Hero";
import AboutMe from "../components/section/AboutMe";
import Service from "../components/section/Service";
import MyProject from "../components/section/MyProject";
import Testimonial from "../components/section/Testimonial";
import ContactMe from "../components/section/ContactMe";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutMe />
      <Service />
      <MyProject />
      <Testimonial />
      <ContactMe />
    </>
  );
};

export default Home;
