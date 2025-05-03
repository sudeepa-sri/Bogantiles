import React from "react";
import Hero from "../Components/Hero/Hero"; 
import Trending from "./Trending/Trending"// Import Hero component
import FastSelling from "./Fastselling/Fastselling";
import Services from "../Components/Services/Services";
import Contactus from "./Contactus";

const Home = () => {
  return (
    <div>
      <Hero /> 
      <Trending/>
      <FastSelling/>
      <Services/>
      <Contactus/>
    </div>
  );
};

export default Home;
