import TICMAS from '../../../public/img/projects/TICMAS.png'
import LinkAndBuild from '../../../public/img/projects/link-and-build.png'
import BILAN from '../../../public/img/projects/BILAN.png'
import JaguareteKaa from '../../../public/img/projects/JaguareteKaa.png'
import Bakery from '../../../public/img/projects/Bakery.png'
import MyWebSite from '../../../public/img/projects/myWebSite.png'
import TravelAgency from '../../../public/img/projects/travel-agency.png'
import PatientManager from '../../../public/img/projects/patient-manager.png'
import ToDoList from '../../../public/img/projects/ToDo-List.png'
import EzShop from '../../../public/img/projects/ezshop.png'
import BuscadorPokemon from '../../../public/img/projects/buscador-pokemon.png'

export const THEME = {
  light: 'light',
  dark: 'dark',
  system: 'system',
}

export const navItems = [
  { name: 'aboutMe', href: '#about-me' },
  { name: 'skills', href: '#skills' },
  { name: 'qualifications', href: '#qualifications' },
  { name: 'projects', href: '#projects' },
  { name: 'contact', href: '#contact-me' },
]

export const languages = [
  { value: 'es', name: 'SPANISH' },
  { value: 'en', name: 'ENGLISH' },
]

export const API_RESPONSES = {
  SUCCESS: 'SUCCESS',
  BAD_REQUEST: 'BAD_REQUEST',
  INTERNAL_SERVER_ERROR: 'INTERNAL_SERVER_ERROR',
}

export const TECHNOLOGIES = {
  FRONTEND: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next', 'Vue', 'Angular'],
  BACKEND: ['Node', 'Express', 'Fastify', 'Nest', 'RESTful', 'GraphQL'],
  DATABASE: [
    'Microsoft SQL Server',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'TypeORM',
    'Sequelize',
  ],
  TESTING: ['Jest', 'Testing Library', 'Supertest'],
  VERSION_CONTROL: ['Git', 'GitHub', 'GitLab'],
  OPERATIVE_SYSTEM: ['Windows', 'Linux', 'Mac'],
  TOOLS: ['SCRUM', 'Kanban', 'Jira', 'Confluence'],
  LANGUAJES: ['Español', 'Inglés'],
}

export const QUALIFICATIONS = {
  WORK: {
    ES: [
      {
        title: 'Desarrollador Full Stack',
        description: 'DIGITAL MAIN',
        dates: 'Ene 2019 - Dic 2021',
      },
      {
        title: 'Desarrollador Full Stack',
        description: 'VI-DA TEC',
        dates: 'Ene 2022 - Sep 2022',
      },
      {
        title: 'Full Stack Software Engineer',
        description: 'WAKAPI',
        dates: 'Oct 2022 - Jun 2023',
      },
      {
        title: 'Desarrollador Full Stack',
        description: 'Ayscom',
        dates: 'Jun 2023 - Actualidad',
      },
    ],
    EN: [
      {
        title: 'Full Stack Developer',
        description: 'DIGITAL MAIN',
        dates: 'Jan 2019 - Dec 2021',
      },
      {
        title: 'Full Stack Developer',
        description: 'VI-DA TEC',
        dates: 'Jan 2022 - Sep 2022',
      },
      {
        title: 'Full Stack Software Engineer',
        description: 'WAKAPI',
        dates: 'Oct 2022 - Jun 2023',
      },
      {
        title: 'Full Stack Developer',
        description: 'Ayscom',
        dates: 'Jun 2023 - Present',
      },
    ],
  },
  EDUCATION: {
    ES: [
      {
        title: 'Ingeniería Electrónica',
        description: 'Universidad Tecnológica Nacional',
        dates: 'Ene 2015 - Dic 2019',
      },
      {
        title: 'Ingeniería en Sistemas',
        description: 'Universidad Tecnológica Nacional',
        dates: 'Ene 2021 - Dic 2021',
      },
      {
        title: 'Desarrollador Web Full Stack - Python (Django) y JavaScript',
        description: 'Polo TIC de Misiones',
        dates: 'Mar 2021 - Jul 2021',
        certificate: '/pdf/certificates/Full Stack Web Development Certification with Python and JavaScript.pdf',
      },
      {
        title: 'Desarrollador Web Full Stack - MERN Stack',
        description: 'NUMEN Academy',
        dates: 'Mar 2021 - Oct 2021',
        certificate: '/pdf/certificates/Full Stack - NUMEN.pdf',
      },
      {
        title: 'Certificado en Fundamentos de Scrum',
        description: 'SCRUMstudy',
        dates: 'Ago 2021 - Oct 2021',
        certificate: '/pdf/certificates/Scrum Fundamentals Certified.pdf',
      },
    ],
    EN: [
      {
        title: 'Electronic Engineering',
        description: 'National Technological University',
        dates: 'Jan 2015 - Dec 2019',
      },
      {
        title: 'System Engineering',
        description: 'National Technological University',
        dates: 'Jan 2021 - Dec 2021',
      },
      {
        title: 'Full Stack Web Development - Python (Django) and JavaScript',
        description: 'Misiones TIC Pole',
        dates: 'Mar 2021 - Jul 2021',
        certificate: '/pdf/certificates/Full Stack Web Development Certification with Python and JavaScript.pdf',
      },
      {
        title: 'Full Stack Web Development - MERN Stack',
        description: 'NUMEN Academy',
        dates: 'Mar 2021 - Oct 2021',
        certificate: '/pdf/certificates/Full Stack - NUMEN.pdf',
      },
      {
        title: 'Scrum Fundamentals Certified',
        description: 'SCRUMstudy',
        dates: 'Aug 2021 - Oct 2021',
        certificate: '/pdf/certificates/Scrum Fundamentals Certified.pdf',
      },
    ],
  },
}

export const PROJECTS = {
  ES: [
    {
      image: '',
      title: 'AppApacho',
      description: 'Plataforma para mantener informado y en contacto cercano a familiares de personas mayores en asilos.',
      appLink: '',
      repoLink: '',
      videoLink: '',
    },
    {
      image: LinkAndBuild.src,
      title: 'Link&Build',
      description: 'Aplicación para conectar personas de todo el mundo y fortalecer el aprendizaje de idiomas.',
      appLink: 'https://app.linkandbuild.net/',
      repoLink: '',
      videoLink: '',
    },
    {
      image: TICMAS.src,
      title: 'Ticmas',
      description: 'Plataforma para la gestión y distribución de contenidos educativos. Brinda herramientas a docentes y directivos para la gestión de contenidos en sus clases.',
      appLink: 'https://docente.colegios.ticmas.io/',
      repoLink: '',
      videoLink: '',
    },
    {
      image: '',
      title: 'Teslo Shop',
      description: 'Clon de eCommerce Tesla.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/teslo-shop',
      videoLink: '',
    },
    {
      image: BILAN.src,
      title: 'BILAN Estados Contables Online',
      description: 'Plataforma para contadores, para obtener Estados Contables.',
      appLink: 'https://bilan.com.ar/home/',
      repoLink: '',
      videoLink: 'https://www.youtube.com/watch?v=ci8A6LjAby4',
    },
    {
      image: JaguareteKaa.src,
      title: 'eCommerce Jaguarete Kaa',
      description: 'Desarrollado con Django, consiste en un eCommerce en el que existen diferentes roles de usuario.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/JaguareteKaa',
      videoLink: 'https://youtu.be/bBSLFJtmC84',
    },
    {
      image: Bakery.src,
      title: 'eCommerce Bakery',
      description: 'Desarrollado con React, JSON-server and Axios.',
      appLink: '',
      repoLink: 'https://github.com/alesitom/reactive-team',
      videoLink: 'https://youtu.be/kYMvk4Har_o',
    },
    {
      image: MyWebSite.src,
      title: 'Esta web',
      description: 'Desarrollado con NextJs, Sass y Material UI.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/my-site',
      videoLink: '',
    },
    {
      image: TravelAgency.src,
      title: 'Travel agency',
      description: 'Desarrollado con Node, Express, Sequelize, MySQL y Bootstrap. Puedes dejar un testimonio.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/agencia-viajes',
      videoLink: '',
    },
    {
      image: PatientManager.src,
      title: 'Patient manager',
      description: 'Desarrollado con Node, Express, MongoDB, Mongoose, React, Bootstrap, Axios y Electron.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/administrador-pacientes',
      videoLink: '',
    },
    {
      image: ToDoList.src,
      title: 'ToDo List',
      description: 'Desarrollado con Node, Express, MongoDB, Mongoose, Cors, JWT, React, Bootstrap, Axios, Jest y Crypress.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/todo-list',
      videoLink: '',
    },
    {
      image: EzShop.src,
      title: 'Ezshop',
      description: 'Desarrollado con Node, Express, Cors, React, Axios, Vanilla CSS.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/ezshop',
      videoLink: '',
    },
    {
      image: BuscadorPokemon.src,
      title: 'Buscador Pokémon',
      description: 'Desarrollado con Vanilla HTML, CSS y JavaScript.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/buscador-pokemon',
      videoLink: '',
    },
  ],
  EN: [
    {
      image: '',
      title: 'AppApacho',
      description: 'Platform to keep relatives of elderly people in nursing homes informed and in close contact.',
      appLink: '',
      repoLink: '',
      videoLink: '',
    },
    {
      image: LinkAndBuild.src,
      title: 'Link&Build',
      description: 'Platform to connect people from all over the world and strengthen language learning.',
      appLink: 'https://app.linkandbuild.net/',
      repoLink: '',
      videoLink: '',
    },
    {
      image: TICMAS.src,
      title: 'Ticmas',
      description: 'Platform for the management and distribution of educational content. It provides tools to teachers and managers for content management in their classes.',
      appLink: 'https://docente.colegios.ticmas.io/',
      repoLink: '',
      videoLink: '',
    },
    {
      image: '',
      title: 'Teslo Shop',
      description: 'Tesla eCommerce Clone.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/teslo-shop',
      videoLink: '',
    },
    {
      image: BILAN.src,
      title: 'BILAN Online Financial Statements',
      description: 'Platform for accountants, to obtain Financial Statements.',
      appLink: 'https://bilan.com.ar/home/',
      repoLink: '',
      videoLink: 'https://www.youtube.com/watch?v=ci8A6LjAby4',
    },
    {
      image: JaguareteKaa.src,
      title: 'Jaguarete Kaa eCommerce',
      description: 'Developed with Django, consists of an ecommerce in which there are different user roles.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/JaguareteKaa',
      videoLink: 'https://youtu.be/bBSLFJtmC84',
    },
    {
      image: Bakery.src,
      title: 'Bakery eCommerce',
      description: 'Developed with React, JSON-server and Axios.',
      appLink: '',
      repoLink: 'https://github.com/alesitom/reactive-team',
      videoLink: 'https://youtu.be/kYMvk4Har_o',
    },
    {
      image: MyWebSite.src,
      title: 'This web',
      description: 'Developed with NextJs, Sass and Material UI.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/my-site',
      videoLink: '',
    },
    {
      image: TravelAgency.src,
      title: 'Travel agency',
      description: 'Developed with Node, Express, Sequelize, MySQL and Bootstrap. You can leave a testimonial.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/agencia-viajes',
      videoLink: '',
    },
    {
      image: PatientManager.src,
      title: 'Patient manager',
      description: 'Developed with Node, Express, MongoDB, Mongoose, React, Bootstrap, Axios and Electron.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/administrador-pacientes',
      videoLink: '',
    },
    {
      image: ToDoList.src,
      title: 'ToDo List',
      description: 'Developed with Node, Express, MongoDB, Mongoose, Cors, JWT, React, Bootstrap, Axios, Jest and Crypress.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/todo-list',
      videoLink: '',
    },
    {
      image: EzShop.src,
      title: 'Ezshop',
      description: 'Developed with Node, Express, Cors, React, Axios, Vanilla CSS.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/ezshop',
      videoLink: '',
    },
    {
      image: BuscadorPokemon.src,
      title: 'Pokemon finder',
      description: 'Developed with Vanilla HTML, CSS and JavaScript.',
      appLink: '',
      repoLink: 'https://github.com/BraianMG/buscador-pokemon',
      videoLink: '',
    },
  ],
}
