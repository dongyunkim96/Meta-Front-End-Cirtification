import React from "react";
import { motion as m } from "framer-motion";
import img1 from "../assets/image/restaurant.jpg";
import img2 from "../assets/image/restaurant chef B.jpg";

function AboutPage() {
  return (
    <m.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75 }}
    >
      <div className="container container-gap">
        <div className="about-container">
          <div className="about-text">
            <div className="about-copy">
              <h4>About Us</h4>
              <h2>Little Lemon Restaurant</h2>
              <h3>Oakton, Virginia</h3>
              <p>
                We make nutritious yet highly craveable bowls and pitas from the freshest ingredients using authentic Mediterranean techniques
              </p>
              <br></br>
              <p>
                If you like fresh ingredients, vibrant colors and bold flavors that you can eat with abandon, we would love to welcome you!
              </p>
            </div>
          </div>
          <div className="about-imgs">
            <img src={img1} alt="Little Lemon Restorant" className="about-img" />
            <img src={img2} alt="Little Lemon Chefs" className="about-img" />
          </div>
        </div>
      </div>
    </m.div>
  );
}

export default AboutPage;