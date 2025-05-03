import React from "react";
import { FaInstagram } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-support">
          <h3>Support</h3>
          <p>📞 +91 6374454072</p>
          <p>📧 contact@bogantitles.com</p>
        </div>

        <div className="footer-address">
          <h3>Address</h3>
          <p>52/1 Oviyampalayam, Paramathi Velur,</p>
          <p>Namakkal, Tamilnadu, India</p>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <a
            href="https://www.instagram.com/bogan_tiles_interiors?igsh=eGd0dmI0ejI5M3Rv"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram /> bogan_tiles_interiors
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025 Bogan Tiles. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

            
           
       
