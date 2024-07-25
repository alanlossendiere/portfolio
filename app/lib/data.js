// Fotos import

import denalanWeb from "../../public/Denalan Web.png";
import eucaliptoWeb from "../../public/Eucalipto Web.png";
import eucaliptoAdmin from "../../public/Eucalipto-admin Web.png";
import journalWeb from "../../public/Journal App Web.png";
import gifExpertApp from "../../public/GifExpertApp Web.png";

// Logos import

import typescriptLogo from "../../public/logos/typescript.svg";
import gitLogo from "../../public/logos/git.svg";
import javascriptLogo from "../../public/logos/javascript.svg";
import expressLogo from "../../public/logos/express.svg";
import tailwindLogo from "../../public/logos/tailwind.svg";
import nodejsLogo from "../../public/logos/nodejs.svg";
import nextjsLogo from "../../public/logos/nextjs.svg";
import reactjsLogo from "../../public/logos/reactjs.svg";
import mongodbLogo from "../../public/logos/mongodb.svg";

// Logo redes sociales

import gitIcon from "../../public/logos/gitIcon.svg";
import linkedInIcon from "../../public/logos/linkedInIcon.svg";
// import upWorkIcon from "../../public/logos/upWork.svg";
import cvIcon from "../../public/logos/cv.svg";

export const NavLinks = [
  {
    nombre: "Sobre Mi",
    src: "#SobreMi",
  },
  {
    nombre: "Habilidades",
    src: "#Habilidades",
  },
  {
    nombre: "Proyectos",
    src: "#Proyectos",
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
    logo: gitIcon,
  },
  {
    redSocial: "LinkedId",
    url: "https://www.linkedin.com/in/alan-lossendiere-3485b279/",
    logo: linkedInIcon,
  },
  {
    redSocial: "CV",
    url: "https://res.cloudinary.com/dyp6u7nll/image/upload/v1721880690/portfolio/widazxnftuae4dbu16kk.pdf",
    logo: cvIcon,
  },
  // {
  //   redSocial: "UpWork",
  //   url: "https://www.upwork.com/freelancers/~011927e6ffa2f654f8",
  //   logo: upWorkIcon,
  // },
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
  {
    framework: "Typescript",
    logo: typescriptLogo,
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
    descripcion:
      "Pagina Web estatica desarrollada para alquileres de temporada en la ciudad de Villa Gesell, buscando mostrar sus propiedades",
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
    descripcion:
      "E-Commerce de tienda de ropa, es un modelo de muestra que tambien cuenta con su administrador de productos",
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
    descripcion:
      "Es el administrador de productos del E-Commerce de Eucalipto, cuenta con edicion y subida de imagenes",
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
    descripcion: "Buscador de los principales Gif segun lo que busques",
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
    descripcion:
      "Aplicacion desarrollada durante curso MERN Stack, es un anotador desarrollado con firebase como DB",
  },
];
