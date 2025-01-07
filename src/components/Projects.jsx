"use client"
import React from "react";
import Card from "./Card";

const projectsData = [
    {
      id: 1,
      title: 'myportfolio',
      languages: [
        { name: 'JavaScript', percentage: '51.5%' },
        { name: 'SCSS', percentage: '45.3%' },
        { name: 'HTML', percentage: '3%' }
      ],
      updatedDate: 'January 17, 2024'
    },
    {
      id: 2,
      title: 'create-react-app-lambda',
      languages: 'code yet to be deployed.',
      updatedDate: 'December 7, 2023'
    },
    {
      id: 3,
      title: 'Task-Management',
      description: 'It is a task management system where all user can track their own tasks with the status of in-progress, pending and completed',
      languages: [
        { name: 'JavaScript', percentage: '78.8%' },
        { name: 'CSS', percentage: '19%' },
        { name: 'HTML', percentage: '2.1%' }
      ],
      updatedDate: 'February 5, 2023'
    },
    {
      id: 4,
      title: 'Mohd-shahid-iqbal',
      description: 'Config files for my GitHub profile.',
      languages: 'code yet to be deployed.',
      updatedDate: 'October 27, 2021'
    }
  ];

const Projects = () => {
    return (
      <div className="projects-container">
        <h1 className="main-title">Recent Projects</h1>
        <div className="projects-grid">
          {projectsData.map(project => (
            <Card key={project.id} project={project} />
          ))}
        </div>
      </div>
    );
  };
  
  export default Projects;