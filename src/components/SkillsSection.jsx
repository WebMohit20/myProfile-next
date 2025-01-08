"use client"
import SkillBar from "./SkillBar";
const SkillsSection = ({ title, skills, isLoading }) => {
    return (
      <div className="skills-section"
        id="skills"
      >
        {skills.map((skill, index) => (
          <SkillBar 
            key={index}
            name={skill.name}
            level={skill.level}
            isLoading={isLoading}
          />
        ))}
      </div>
    );
  };

export default SkillsSection;






