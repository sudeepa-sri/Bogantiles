import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url("/background.jpg")`, // ✅ Reference directly from public folder
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
        
      }}
    >
      <div className="hero-content">
        <h1>Elevate Your Space with Timeless Tiles</h1>
        <p>Discover premium collections that redefine elegance and durability.</p>
        {/* <button className="explore-btn">Explore More</button> */}
      </div>
    </div>
  );
};

export default Hero;


