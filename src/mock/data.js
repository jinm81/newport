import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Hojin Mun', // e.g: 'Name | Developer'
  lang: 'English and Korean', // e.g: en, es, fr, jp
  description: 'Welcome to my website', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Hojin mun',
  subtitle: '',
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'pexel.jpg',
  paragraphOne: '',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1eJ0A7_BXIXuT0ArQHdTOS4aCoi3aN6VM/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'demo.png',
    title: 'The Gaming Network',
    info:
      'Fullstack web for video gamers find friends or other gamers to play together, team of 3 in created a full-stack web used html, css, Javascript, node.js, Auth0,socket.Io, rapid api, mongodb,jquery',
    info2: '',
    url: 'https://good-game2020.herokuapp.com/',
    repo: 'https://github.com/adbergen/the-gaming-network/', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'trace.jpg',
    title: 'Trace',
    info:
      'Web app that uses passport to authenticate and login and stores all the tracking data Team of four created tracking website that is one stop for all the carriers Technology used : HTML CSS JavaScript, Bulma, Passport, mysql',
    info2: '',
    url: 'https://tracerx.herokuapp.com',
    repo: 'https://github.com/adbergen/trace', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'rad.png',
    title: 'Read Your Movie',
    info:
      'Web app that allows users to search a book to see if there is a movie version with details about it and vice versa via google books API and IMDB API Technology used : Html, CSS, Javascript, ajax, jQuery, animate, google books api, imdb api',
    info2: '',
    url: 'https://mi6gy.github.io/read_your_movie',
    repo: 'https://github.com/mi6gy/read_your_movie', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Contact',
  email: 'Hojinmun@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/hojinmun/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/jinm81',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
