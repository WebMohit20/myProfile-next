"use client"

import React,{useState,useEffect} from 'react';

import SkillsSection from './SkillsSection';

const technicalSkills = [
    { name: 'React', level: 85 },
    { name: 'JavaScript', level: 90 },
    { name: 'Data Structures', level: 75 },
    { name: 'HTML/CSS', level: 80 },
    { name: 'TypeScript', level: 85 },
    { name: 'SQL', level: 88 }
  ];
  
  const softSkills = [
    { name: 'Goal-Oriented', level: 85 },
    { name: 'Collaboration', level: 90 },
    { name: 'Positivity', level: 80 },
    { name: 'Adaptability', level: 85 },
    { name: 'Problem Solving', level: 85 },
    { name: 'Empathy', level: 90 },
    { name: 'Organization', level: 80 },
    { name: 'Creativity', level: 90 }
  ];

const Skills = () => {
    const [activeSection, setActiveSection] = useState('technical');
    const [isLoading, setIsLoading] = useState(true);
  
   
    useEffect(() => {
      setIsLoading(true);
      const timer = setTimeout(() => {
        setIsLoading(false);
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    const handleTabClick = (section) => {
      if (section !== activeSection) {
        setIsLoading(true);
        setActiveSection(section);
        setTimeout(() => {
          setIsLoading(false);
        }, 1000);
      }
    };
  
    return (
      <div className="skills-container">
        <h1 className="skills-title">Skills</h1>
        
        <div className="skills-tabs">
          <button 
            className={`tab-button ${activeSection === 'technical' ? 'active' : ''}`}
            onClick={() => handleTabClick('technical')}
          >
            Technical Skills
          </button>
          <button 
            className={`tab-button ${activeSection === 'soft' ? 'active' : ''}`}
            onClick={() => handleTabClick('soft')}
          >
            Soft Skills
          </button>
        </div>
  
        <div className="skills-content">
          {activeSection === 'technical' ? (
            <SkillsSection 
              title="Technical Skills" 
              skills={technicalSkills} 
              isLoading={isLoading}
            />
          ) : (
            <SkillsSection 
              title="Soft Skills" 
              skills={softSkills} 
              isLoading={isLoading}
            />
          )}
        </div>
  
    
      </div>
    );
  };

export default Skills;