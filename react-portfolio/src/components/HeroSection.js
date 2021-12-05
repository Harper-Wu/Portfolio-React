import React from "react";
import "../styles/HeroSection.css";
import StartNight from "../videos/video-1.mp4";
import Typical from "react-typical";

export default function HeroSection() {
  return (
    <div className="hero-container" id="hero-section">
      <video src={StartNight} autoPlay loop muted></video>
      <div className="hero-info">
        <h1>Hi there, I'm Haprer Wu</h1>
        <h2>
          I'm a{" "}
          <Typical
            loop={Infinity}
            wrapper="b"
            steps={[
              "MIT Student 👩🏻‍💻",
              1000,
              "Python Developer 🐍",
              1000,
              "Life Learner 🔥",
              1000,
            ]}
          />
        </h2>
      </div>
    </div>
  );
}
