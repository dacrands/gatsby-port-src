import React from 'react'

import ProjectOne from './projectOne'
import ProjectTwo from './projectTwo'
import ProjectThree from './projectThree'
import ProjectFour from './projectFour'
import ProjectFive from './projectFive'

const Projects = () => (
    <div className="projects__container">
      <div className="projects__desc">
        <div className="container">
          <h1>Projects</h1>
          <h3>These are some of the projects I have built.</h3>
        </div>
      </div>
      <div className="projects container">
        <ProjectOne />
        <ProjectFour />
        <ProjectTwo />
        <ProjectThree />
        <ProjectFive />
      </div>
    </div>
);

export default Projects;