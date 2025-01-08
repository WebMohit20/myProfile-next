"use client";

import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-content">
        <a className="navbar-brand" href="#home">
          &lt;Mohit/&gt;
        </a>

        <div className={`navbar-links ${menuOpen ? "show" : ""}`}>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
        </div>

        <button className="mobile-menu-button" onClick={toggleMenu}>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
          <div className="menu-icon"></div>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;