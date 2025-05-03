import React from "react";
import "./Services.css";

import qualityImg from "../Images/quality.jpg";
import fastWorkImg from "../Images/fast-work.jpg";
import trustImg from "../Images/trust.jpg";

import varietyImg from "../Images/variety.jpg";

const Services = () => {
  return (
    <section className="why-choose-us">
      <h2>
        Why Choose <span>Bogan Tiles</span>
      </h2>

      <div className="feature">
        <img src={qualityImg} alt="Premium Quality Tiles" />
        <div className="text">
          <h3>Exceptional Tile Quality</h3>
          <p>
            At Bogan Tiles, quality is our hallmark. We hand-select each tile to ensure it meets our stringent standards for durability and beauty. Every piece undergoes rigorous quality control, ensuring that the finish, design, and resilience remain unmatched. When you choose us, you choose tiles that bring lasting style and performance to your space.
          </p>
        </div>
      </div>

      <div className="feature reverse">
        <img src={fastWorkImg} alt="Fast Project Turnaround" />
        <div className="text">
          <h3>Fast Project Turnaround</h3>
          <p>
            We understand that every project has a schedule, and delays can be costly. Our efficient logistics and dedicated team ensure that your tiles arrive on time, every time. With streamlined processes and a focus on prompt service, we keep your project moving forward without compromising on quality.
          </p>
        </div>
      </div>

      <div className="feature">
        <img src={trustImg} alt="Trusted by Thousands" />
        <div className="text">
          <h3>Trusted by Thousands</h3>
          <p>
            Our reputation is built on the trust and satisfaction of homeowners, interior designers, and contractors alike. Bogan Tiles has become synonymous with reliability and excellence. We value transparency and consistency, ensuring every interaction reinforces the trust our customers place in us.
          </p>
        </div>
      </div>

      

      <div className="feature reverse">
        <img src={varietyImg} alt="Extensive Tile Selection" />
        <div className="text">
          <h3>Extensive Tile Selection</h3>
          <p>
            Discover endless design possibilities with our broad range of tiles. Whether you’re looking for classic elegance or modern trends, our diverse collection caters to every style and space. Explore a variety of colors, textures, and finishes that allow you to create a truly personalized environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Services;
