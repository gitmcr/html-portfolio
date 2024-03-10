/* eslint-disable no-unused-vars */
import html from "../../assets/html.svg";
import css from "../../assets/css.svg";
import js from "../../assets/javascript.svg";
import cms from "../../assets/cms.svg";
import nodejs from "../../assets/node-js.svg";
import python from "../../assets/python.svg";
import react from "../../assets/react.svg";
import sass from "../../assets/sass.svg";
import tailwind from "../../assets/tailwind.svg";
import ps from "../../assets/ps.svg";
import figma from "../../assets/figma.svg";
import seo from "../../assets/seo.svg";

import imgproject1 from "../../assets/mcraylet-proj.png";
import imgproject2 from "../../assets/max.png";
import imgproject3 from "../../assets/max.png";

export const projects = [
  {
    name: "MCRaylet",
    desc: "Site web pour ma Freelance. Fabriqué en 2022 avec un CMS et des fonctionnalités intégrées. Le design a été créé à l'aide de Figma pour les mockups et Photoshop et Illustrator pour la réalisation.",
    desc2:
      "SEO et référencement naturel avec un score de 98/100 dépassant les personnes implantées depuis des années sur le mot clé informatique en l'espace de quatre mois.",
    desc3:
      "Conceptualisé et réalisé en deux semaines en partant avec aucune connaissance des CMS avec un apprentissage en ligne en autodidacte.",
    languages: [cms, figma, ps, seo],
    image: [imgproject1],
    linkgit: "https://github.com/gitmcr",
    linklive: "https://www.mcraylet.com/",
  },
  {
    name: "Projet 2",
    desc: "Ongoing",
    desc2: "Ongoing",
    desc3: "Ongoing",
    languages: [react, react, react],
    image: [imgproject2],
    linkgit: "https://github.com/gitmcr",
    linklive: "https://www.mcraylet.com/",
  },
  {
    name: "Projet 3",
    desc: "Ongoing",
    desc2: "Ongoing",
    desc3: "Ongoing",
    languages: [tailwind, tailwind, tailwind],
    image: [imgproject2],
    linkgit: "https://github.com/gitmcr",
    linklive: "https://www.mcraylet.com/",
  },
];
