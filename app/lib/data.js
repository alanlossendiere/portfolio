// Fotos import

import denalanWeb from "../../public/Denalan Web.png";
import eucaliptoWeb from "../../public/Eucalipto Web.png";
import eucaliptoAdmin from "../../public/Eucalipto-admin Web.png";
import journalWeb from "../../public/Journal App Web.png";
import gifExpertApp from "../../public/GifExpertApp Web.png";

// Logos import

import gitLogo from "../../public/logos/git.svg";
import javascriptLogo from "../../public/logos/javascript.svg";
import expressLogo from "../../public/logos/express.svg";
import tailwindLogo from "../../public/logos/tailwind.svg";
import nodejsLogo from "../../public/logos/nodejs.svg";
import nextjsLogo from "../../public/logos/nextjs.svg";
import reactjsLogo from "../../public/logos/reactjs.svg";
import mongodbLogo from "../../public/logos/mongodb.svg";

export const NavLinks = [
  {
    nombre: "Sobre Mi",
    src: "#SobreMi",
  },
  {
    nombre: "Proyectos",
    src: "#Proyectos",
  },
  {
    nombre: "Habilidades",
    src: "#Habilidades",
  },
  {
    nombre: "Contacto",
    src: "#Contacto",
  },
];

export const RedesSociales = [
  {
    redSocial: "GitHub",
    url: "https://github.com/Alusonn",
  },
  {
    redSocial: "LinkedId",
    url: "https://www.linkedin.com/in/alan-lossendiere-3485b279/",
  },
  {
    redSocial: "UpWork",
    url: "https://www.upwork.com/freelancers/~011927e6ffa2f654f8",
  },
];

export const Skills = [
  {
    framework: "Javascript",
    logo: javascriptLogo,
    url: "www.alanlossendiere.com",
  },
  {
    framework: "React",
    logo: reactjsLogo,
    url: "www.alanlossendiere.com",
  },
  {
    framework: "NextJs",
    logo: nextjsLogo,
    url: "www.alanlossendiere.com",
  },
  {
    framework: "nodeJs",
    logo: nodejsLogo,
    url: "www.alanlossendiere.com",
  },
  {
    framework: "Express",
    logo: expressLogo,
    url: "www.alanlossendiere.com",
  },
  {
    framework: "MongoDB",
    logo: mongodbLogo,
    url: "www.alanlossendiere.com",
  },
  {
    framework: "Tailwind",
    logo: tailwindLogo,
    url: "www.alanlossendiere.com",
  },
  {
    framework: "Git",
    logo: gitLogo,
    url: "www.alanlossendiere.com",
  },
];

export const Proyectos = [
  {
    nombre: "Denalan Alquileres",
    src: "https://denalan.com.ar/",
    Skills: [
      "React",
      "Javascript",
      "Bootstrap",
      "React Router",
      "Canvas",
      "Vite",
    ],
    imgStatic: denalanWeb,
    descripcion: "Loremmm Loreemmm",
  },
  {
    nombre: "Eucalipto Ecommerce",
    src: "https://eucalipto.alanlossendiere.com/",
    Skills: [
      "React",
      "Javascript",
      "Bootstrap",
      "Git",
      "ReactRouter",
      "Axios",
      "Redux",
    ],
    imgStatic: eucaliptoWeb,
    descripcion: "Loremmm Loreemmm",
  },
  {
    nombre: "Admin Dashboard Ecommerce",
    src: "https://eucaliptoadmin.alanlossendiere.com/",
    Skills: [
      "React",
      "Javascript",
      "Cloudinary",
      "Mongo DB",
      "Bootstrap",
      "Git",
      "ReactRouter",
      "Axios",
      "Redux",
    ],
    imgStatic: eucaliptoAdmin,
    descripcion: "Loremmm Loreemmm",
  },
  // {
  //   nombre: "Menu Restaurant - QuickMenu",
  //   src: "https://www.quickmenu.com.ar",
  //   Skills: ["React Native", "Javascript", "Tailwind", "Zustand", "Firebase"],
  //   imgStatic: "Foto de app",
  //   descripcion: "Loremmm Loreemmm",
  // },
  {
    nombre: "Gif Search",
    src: "https://gifexpertapp.alanlossendiere.com/",
    Skills: ["React", "Javascript", "Bootstrap", "React Router"],
    imgStatic: gifExpertApp,
    descripcion: "Loremmm Loreemmm",
  },
  {
    nombre: "Notas con backend",
    src: "https://journal.alanlossendiere.com/",
    Skills: [
      "React",
      "Javascript",
      "Material UI",
      "Redux",
      "React Router",
      "Firebase",
    ],
    imgStatic: journalWeb,
    descripcion: "Loremmm Loreemmm",
  },
];
