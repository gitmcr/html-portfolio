/* eslint-disable react/no-unescaped-entities */
import "./About.css";

import pp2 from "../../assets/pp2.1.png";
import react from "../../assets/react.svg";

export default function About() {
  return (
    <div className="colorabout">
      <div className="about" id="about">
        <div className="about-left">
          <img src={pp2} alt="Illustration de Maxime Raylet" width={330} />
        </div>
        <div className="about-right">
          <h2>À propos</h2>
          <br />
          <h3>
            Développeur Front-End{" "}
            <img src={react} alt="Logo React" width={40} />
          </h3>
          <br />
          <p>
            👨‍💻 Je m'appelle Maxime et je suis passionné par le développement
            informatique et le design.
          </p>
          <br />
          <p>
            Mon goût pour l'UX/UI et ma vocation pour le développement web m'ont
            permit de joindre mes deux meilleures armes pour offrir la meilleur
            expérience utilisateur possible.
          </p>
          <br />
          <p>📍 Je suis originaire du sud de la France.</p>
          <br />
          <br />
          <div className="hero-right-btn">
            <button>
              <a href="#experience">
                <p>Expérience</p>
              </a>
            </button>
            <button>
              <a href="#contact">
                <p>Contact</p>
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
