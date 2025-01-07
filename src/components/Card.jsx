"use client"
import {FaGithub} from "react-icons/fa";
const Card = ({ project }) => {
    return (
      <div className="project-card">
        <h2 className="project-title">{project.title}</h2>
        
        {project.description && (
          <p className="project-description">{project.description}</p>
        )}
        
        <div className="button-container">
            <button className="project-button">  
                <FaGithub size={20} className="icon" />
                Clone Project
            </button>
            <button className="project-button">
                <FaGithub size={20} className="icon" />Repo
            </button>
        </div>
        
        <div className="languages-container">
          <span className="label">Languages: </span>
          {typeof project.languages === 'string' ? (
            <span className="language-text">{project.languages}</span>
          ) : (
            <div className="languages-list">
              {project.languages.map((lang, index) => (
                <span key={index} className="language-item">
                  {lang.name}: {lang.percentage}
                  {index < project.languages.length - 1 && ' '}
                </span>
              ))}
            </div>
          )}
        </div>
        
        <div className="card-footer">
            <span className="stars">
                <FaGithub size={15} className="icon" />
                Stars
            </span>
          <span className="update-date">Updated on {project.updatedDate}</span>
        </div>
      </div>
    );
  };

  export default Card;


