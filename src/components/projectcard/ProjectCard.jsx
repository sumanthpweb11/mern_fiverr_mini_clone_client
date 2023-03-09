import React from "react";
import { Link } from "react-router-dom";
import "./ProjectCard.scss";

function ProjectCard({ projectProps }) {
  return (
    <Link to="/" className="link">
      <div className="projectCard">
        <img src={projectProps.img} alt="" />
        {/* <span className="desc">{projectProps.desc}</span>
        <span className="title">{projectProps.title}</span> */}

        <div className="info">
          <img src={projectProps.pp} alt="profilepic" />
          <div className="texts">
            <p>{projectProps.cat}</p>
            <span>{projectProps.username}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
export default ProjectCard;
