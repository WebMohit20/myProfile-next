"use client"

import Image from "next/image";
import picture from "../images/myPicture.jpg"



const AboutMe = () => {
  return (
    <div className="AboutMe" 
      id="about"
    >
   
      <div className="image">
        <Image
          src={picture}
          alt="Profile Picture"
          width={200}
          height={200}
          className="profile-image"
        />
      </div>

    
      <div className="text">
        <h2>About Me</h2>
        <p>
          My name is Mohit Khemani. I'm pursuing Bachelors of Computer Application  from Indra Gandhi Open University at New Delhi . I am passionate to develop new things and explore technology
          and my goal is to pursue this passion within the field of software
          engineering. In my free time, I like learning new technologies.
        </p>


        <button className="resume-button">Resume</button>
      </div>
    </div>
  );
};

export default AboutMe;