import React from "react";

function ProjectItem({ name, about, technologies }) {
  
  const techno = technologies.map(tech => <span key={tech}>{tech}</span>)
  // console.log(technologies)
  return (
    <div className="project-item">
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">
        {techno}
      </div>
    </div>
  );
}

export default ProjectItem;
