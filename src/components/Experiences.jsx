"use client"
import logo from "../images/acciojob_logo.jpeg"
import Image from "next/image";
const Experiences = () => {
    const experiences = [
      {
        logo,
        company: "Accio Job",
        role: "React Developer",
        duration: "June 2024-February 2025"
      },
      {
        logo, 
        company: "Accio Job",
        role: "React Developer",
        duration: "June 2024-February 2025"
      },
      {
        logo, 
        company: "Accio Job",
        role: "React Developer",
        duration: "June 2024-February 2025"
      },
    ];
  
    return (
      <div className="experiences-container">
        <h2 className="title">Experiences</h2>
  
        <div className="experiences-grid">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card">
              <Image
                src={experience.logo}
                alt={`${experience.company} Logo`}
                className="experience-logo"
              />
              <h3>{experience.company}</h3>
              <p>{experience.role}</p>
              <p>{experience.duration}</p>
            </div>
          ))}
        </div>
  
        {/* <style jsx>{`
          .experiences-container {
            
          }
  
          .title {
           
          }
  
          .experiences-grid {
            
          }
  
          .experience-card {
            
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            transition: transform 0.3s ease-in-out;
          }
  
          .experience-card:hover {
            transform: translateY(-10px);
          }
  
          .experience-logo {
           
          }
  
          
          
          }</style> */}
      </div>
    );
  };
  
  export default Experiences;