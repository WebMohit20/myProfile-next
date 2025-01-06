"use client"

import { useState, useEffect } from "react";
import { FaGithub, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const HeroSection = () => {
  const [backgroundColor, setBackgroundColor] = useState("#fce2db"); // Initial background color
  const [passionateText, setPassionateText] = useState(""); // Typing effect state
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  
  const colors = ["#fce2db", "#fde4cf", "#e9edc9", "#cce3de", "#ffc8dd"];
 
  const typingText = "Passionate about changing the world with technology. ";

  // Change background color every 5 seconds

  useEffect(() => {
    let colorIndex = 0;
    const interval = setInterval(() => {
      colorIndex = (colorIndex + 1) % colors.length;
      setBackgroundColor(colors[colorIndex]);
    }, 3000);

    return () => clearInterval(interval); 
  }, [colors]);

  useEffect(() => {
    let index=-1;
    const typingSpeed = 100;

    if (!isTypingComplete) {
      const interval = setInterval(() => {
        if (index < typingText.length-1) {
          index++;
          setPassionateText((prev) => prev + typingText[index]);
        } else {
          clearInterval(interval);
          setIsTypingComplete(true); 
        }
      }, typingSpeed);

      return () => clearInterval(interval);
    }
  }, [isTypingComplete]);

  
  
  return (
    <div
    className="HeroSection"
      style={{
        backgroundColor: backgroundColor,
        transition: "background-color 1s ease-in-out"
      }}
    >
      
      <div style={{ textAlign: "center" }}>
        <h1>
         Mohit Khemani
        </h1>
        <p className="passionateText">
          {passionateText}
        </p>

       
        <div  className="links" >
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={40} className="icon" />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <FaFacebook size={40} className="icon" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            
          >
            <FaInstagram size={40} className="icon" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} className="icon" />
          </a>
        </div>

       
        <button
          className="aboutBtn"
        >
          More about me
        </button>
      </div>

      
    </div>
  );
};

export default HeroSection;
