"use client"

const Experiences = () => {
    const experiences = [
      {
        logo: "/simpana-logo.png", 
        company: "SIMPANA TECHNOLOGY",
        role: "React Developer",
        duration: "Aug 2020 – May 2022",
      },
      {
        logo: "/vendify-logo.png", 
        company: "Vendify",
        role: "Senior Software Engineer",
        duration: "May 2022 – March 2023",
      },
      {
        logo: "/pace-logo.png", 
        company: "PACE",
        role: "React Developer",
        duration: "March 2023 – Present",
      },
    ];
  
    return (
      <div className="experiences-container">
        <h2 className="title">Experiences</h2>
  
        <div className="experiences-grid">
          {experiences.map((experience, index) => (
            <div key={index} className="experience-card">
              <img
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