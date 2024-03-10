/* eslint-disable react/no-unescaped-entities */

import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/javascript.svg";
import react from "../../assets/react.svg";

import ps from "../../assets/ps.svg";
import figma from "../../assets/figma.svg";
import tailwind from "../../assets/tailwind.svg";
import sass from "../../assets/sass.svg";

import node from "../../assets/node-js.svg";
import mysql from "../../assets/mysql.png";
import mongo from "../../assets/mongodb.svg";
import python from "../../assets/python.svg";

import git from "../../assets/git.svg";
import seo from "../../assets/seoseo.png";
import cms from "../../assets/cms1.png";
import github from "../../assets/githublogo.png";

import "./Skill.css";

export default function Skill() {
  return (
    <div className="colorskill">
      <div className="skill" id="skill">
        <div className="skill-title">
          <h1>Compétences</h1>
          <p>
            Voici les compétences que j'ai acquises et celles sur lesquelles je
            travaille
          </p>
        </div>
        <div className="skill-list">
          <div className="skill-left">
            <div className="front-end">
              <h2>Front-End</h2>
              <div className="skill-icons">
                <img src={html} alt="Logo HTML" width={40} />
                <img src={css} alt="Logo HTML" width={40} />
                <img src={js} alt="Logo HTML" width={40} />
                <img src={react} alt="Logo HTML" width={42} />
              </div>
              <div className="level">
                <p>Avancé</p>
              </div>
            </div>
            <div className="uxui">
              <h2>UX/UI Design</h2>
              <div className="skill-icons">
                <img src={ps} alt="" width={40} />
                <img src={figma} alt="" width={26} />
                <img src={tailwind} alt="" width={45} />
                <img src={sass} alt="" width={40} />
              </div>
              <div className="level">
                <p>Intermédiaire</p>
              </div>
            </div>
          </div>
          <div className="skill-right">
            <div className="back-end">
              <h2>Back-End</h2>
              <div className="skill-icons">
                <img src={node} alt="" width={40} />
                <img src={mysql} alt="" width={45} />
                <img src={mongo} alt="" width={48} />
                <img src={python} alt="" width={40} />
              </div>
              <div className="level">
                <p>Débutant</p>
              </div>
            </div>
            <div className="tools">
              <h2>Outils</h2>
              <div className="skill-icons">
                <img src={git} alt="" width={40} />
                <img src={seo} alt="" width={40} />
                <img src={cms} alt="" width={45} />
                <img src={github} alt="" width={40} />
              </div>
              <div className="level">
                <p>Avancé</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
