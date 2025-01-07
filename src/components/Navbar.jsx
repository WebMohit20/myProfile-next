"use client"

import React, { useState, useEffect } from 'react';


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-content">
        <a className="navbar-brand" href='#home'>
          &lt;Mohit /&gt;
        </a>
        
        <div className="navbar-links">
          <a href='#projects'>Projects</a>
          <a href='#resume'>Resume</a>
          <a href='#about'>About</a>
          <a href='#skills'>Skills</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;