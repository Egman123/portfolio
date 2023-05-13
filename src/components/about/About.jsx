import React from "react";
import "./about.css";
import Image from "../../assets/avatar-1.svg";


const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <div className="about__data grid">
            <p className="about__description">
              I have about 1.5 years of experience in the learning process, I
              worked with react library where I used redux, ts, creating some
              projects, I know algorithms such as binarySearch,
              recursiveBinarySearch, selectionSort, bubbleSort, etc.. I am ready
              to work in a professional team with professional specialists
            </p>
          
        </div>
      </div>

     
    </section>
  );
};

export default About;
