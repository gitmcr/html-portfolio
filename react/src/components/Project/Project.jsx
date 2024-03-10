/* eslint-disable react/no-unescaped-entities */

import { useState } from "react";

import "./Project.css";
import { projects } from "./projects.js";

import github from "../../assets/githublogo.png";
import live from "../../assets/live.png";

export default function Project() {
  const [currentProject, setCurrentProject] = useState(0);

  const handleProjectChange = (index) => {
    setCurrentProject(index);
  };

  const project = projects[currentProject];

  return (
    <div className="colorproject">
      <div className="project" id="project">
        {project && (
          <>
            <div className="project-left">
              <h2 className="project-title">{project.name}</h2>
              <p className="project-desc-p">{project.desc}</p>
              <p className="project-desc-p">{project.desc2}</p>
              <p className="project-desc-p">{project.desc3}</p>
              <br />
              <br />
              <div className="bottom-desc">
                <h3>Langages / Outils</h3>
                <div className="languages-list">
                  {project.languages.map((lang, index) => (
                    <img src={lang} key={index} className="langs" alt={index} />
                  ))}
                </div>
              </div>
            </div>
            <div className="project-right">
              <img
                className="project-image"
                src={project.image[0]}
                alt={`Projet ${currentProject + 1}`}
              />
              <div className="project-links">
                <a href={project.linkgit} target="_blank">
                  <img src={github} alt="Logo GitHub" />
                </a>
                <a href={project.linklive} target="_blank">
                  <img src={live} alt="Logo Live" />
                </a>
              </div>
              <div className="project-page">
                <br />
                {projects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => handleProjectChange(index)}
                    className={index === currentProject ? "active" : ""}
                  >
                    {index + 1}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
