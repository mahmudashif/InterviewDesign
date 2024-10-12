import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import Project from "./pages/Project";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";

const App = () => {
  let router = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="/about-me" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/project" element={<Project />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    )
  );
  
  return <RouterProvider router={router} />;
};

export default App;
