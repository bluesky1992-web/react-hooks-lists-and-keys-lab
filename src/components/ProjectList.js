import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const creations = projects.map(project => <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>)
  // console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{creations}</div>
    </div>
  );
}

export default ProjectList;
