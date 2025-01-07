"use client"

import React from "react"




const SkillBar = ({ name, level, isLoading }) => {



    return (
      <div className="skill-item">
        <span className="skill-name">{name}</span>
        <div className="skill-bar">
          <div 
            className={`skill-progress ${isLoading ? 'loading' : ''}`}
            style={{ width: `${level}%` }}
          ></div>
        </div>
      </div>
    );
  };

export default SkillBar;