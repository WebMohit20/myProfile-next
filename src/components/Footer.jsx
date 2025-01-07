"use client"


import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-title">Get In Touch</h1>
        
        <p className="footer-text">
        I'm currently looking for full-time React Developer/Frontend Developer opportunities! If you know of any positions available, if you have any questions, 
        or if you just want to say hi, please feel free to email me at{' '}
          <a href="2003mohitkhemani@gmail.com" className="footer-email">
            2003mohitkhemani@gmail.com
          </a>
          .
        </p>

        <div className="footer-signature">
          <span className="code-icon">&#60;/&#62;</span>
          <span className="with-text">with</span>
          <span className="heart-icon">❤</span>
          <span className="by-text">by</span>
          <span className="name-badge">Mohit Khemani</span>
          <span className="using-text">using</span>
          <span className="next-text">NextJS</span>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;