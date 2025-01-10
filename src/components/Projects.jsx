"use client"
import React from "react";
import Card from "./Card";

const projectsData = [
    {
      id: 1,
      title: 'AlarmApp',
      link:"https://github.com/WebMohit20/AlarmApp",
      languages: [
        { name: 'JavaScript', percentage: '45.5%' },
        { name: 'CSS', percentage: '37.3%' },
        { name: 'HTML', percentage: '17.18%' }
      ],
      updatedDate: '2 moths ago'
    },
    {
      id: 2,
      title: 'CartApp',
      link:"https://github.com/WebMohit20/CartApp",
      languages: [
        { name: 'JavaScript', percentage: '79.3%' },
        { name: 'CSS', percentage: '3.9%' },
        { name: 'HTML', percentage: '16.8%' }
      ],
      updatedDate: '1 month ago'
    },
    {
      id: 3,
      title: 'postApp',
      link:"https://github.com/WebMohit20/postApp",
      languages: [
        { name: 'JavaScript', percentage: '63.4%' },
        { name: 'CSS', percentage: '33%' },
        { name: 'HTML', percentage: '3.6%' }
      ],
      updatedDate: '10 November 2024'
    },
    {
      id: 4,
      title: 'Mohit-Khemani',
      link:"https://github.com/WebMohit20/myProfile-next",
      description: 'Config files for my GitHub profile.',
      languages: 'code yet to be deployed.',
      updatedDate: '3 days ago'
    }
  ];

const Projects = () => {
    return (
      <div className="projects-container"
        id="projects"  
      >
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