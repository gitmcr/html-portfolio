/* eslint-disable react/no-unescaped-entities */
import "./Experience.css";

import barna from "../../assets/barna.png";
import bts from "../../assets/cordeille.png";
import mcraylet from "../../assets/mcraylet.png";
import formations from "../../assets/formations.png";

export default function Experience() {
  return (
    <div className="colorexperience">
      <div className="experience" id="experience">
        <h1>Expérience</h1>
        <div className="timeline">
          <div className="container left-container">
            <a href="">
              <img src={barna} alt="BARNA Entreprise" />
            </a>
            <div className="text-box">
              <h2>BARNA - Stage de 6 mois</h2>
              <small>Janvier 2021 - Juin 2021</small>
              <p>
                {" "}
                Développement web Fullstack avec base de données et déploiement
                et utilisation d'outils de design et de CLI.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <a href="https://esj-lacordeille.com/" target="_blank">
              <img src={bts} alt="ESJ La Cordeille" />
            </a>
            <div className="text-box">
              <h2>BTS Informatique - ESJ La Cordeille</h2>
              <small>2020 - 2022</small>
              <p>
                Développement web & applications (HTML, CSS, Python &
                JavaScript), étude de systèmes informatiques. Projets,
                instrumentation et mesures.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>

          <div className="container left-container">
            <a href="https://mcraylet.com/" target="_blank">
              <img src={mcraylet} alt="MCRaylet" />
            </a>
            <div className="text-box">
              <h2>MCRaylet - Freelance (DG)</h2>
              <small>2022 - aujourd'hui</small>
              <p>
                {" "}
                Développement web et CMS, Assistance HelpDesk N1/2 (maintenance
                et dépannage) et Formations Informatiques.
              </p>
              <span className="left-container-arrow"></span>
            </div>
          </div>

          <div className="container right-container">
            <a
              href="https://www.udemy.com/course/react-the-complete-guide-incl-redux/"
              target="_blank"
            >
              <img src={formations} alt="Formations" />
            </a>
            <div className="text-box">
              <h2>Formations (freeCodeCamp, Udemy, WebDev et +) </h2>
              <small>2023 - aujourd'hui</small>
              <p>
                HTML & CSS + Responsive - SASS - Tailwind CSS - JavaScript -
                ES6+ - React (Redux + Toolkit / React Router) avec 600+ heures.
              </p>
              <span className="right-container-arrow"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
