// Navigation Bar SECTION
const navBar = {
  show: true,
};

// Main Body SECTION
const mainBody = {
  gradientColors: "#4484ce, #1ad7c0, #ff9b11, #9b59b6, #ff7f7f, #ecf0f1",
  firstName: "Shafagh",
  middleName: "",
  lastName: "Rastegari",
  message: "Front-end developer ",
  icons: [
    {
      image: "fa-github",
      url: "https://github.com/ShafaghRastegari",
    },
    {
      image: "fa-gitlab",
      url: "https://gitlab.com/ShafaghRastegari",
    },
    {
      image: "fa fa-envelope",
      url: "mailto:shafaghrastegari@gmail.com",
    },
    {
      image: "fa-instagram",
      url: "https://www.instagram.com/shafagh__rs/",
    },
    // {
    //   image: "fa-linkedin",
    //   url: "",
    // },
    {
      image: "fa-twitter",
      url: "https://twitter.com/Shafagh_rs",
    },
  ],
};
const about = {
  show: true,
  heading: "About Me",
  imageLink: require("../editable-stuff/Shafagh.png"),
  imageSize: 200,
  message:
    "Hi, my name is Shafagh Rastegari. I studied computer engineering at IUST(Iran University of Science and Technology) since 2017. Now im front- end developer at Targoman. I develop and design websites base on HTML, CSS and Reactjs which is JS library and also Vuejs which is JS framework.",
  //resume: "https://docs.google.com/document/d/13_PWdhThMr6roxb-UFiJj4YAFOj8e_bv3Vx9UHQdyBQ/edit?usp=sharing",
};

const repos = {
  show: true,
  heading: "Recent Projects",
  gitHubUsername: "ShafaghRastegari", //i.e."johnDoe12Gh"
  reposLength: 9,
  specificRepos: [],
};


// SKILLS SECTION
const skills = {
  show: true,
  heading: "Skills",
  hardSkills: [
    { name: "Python", value: 90 },
    { name: "SQL", value: 75 },
    { name: "Data Structures", value: 85 },
    { name: "C/C++", value: 65 },
    { name: "JavaScript", value: 90 },
    { name: "React", value: 65 },
    { name: "HTML/CSS", value: 55 },
    { name: "C#", value: 80 },
  ],
  softSkills: [
    { name: "Goal-Oriented", value: 80 },
    { name: "Collaboration", value: 90 },
    { name: "Positivity", value: 75 },
    { name: "Adaptability", value: 85 },
    { name: "Problem Solving", value: 75 },
    { name: "Empathy", value: 90 },
    { name: "Organization", value: 70 },
    { name: "Creativity", value: 90 },
  ],
};

// GET IN TOUCH SECTION
const getInTouch = {
  show: true,
  heading: "Get In Touch",
  message:
    "If you have any questions, or if you just want to say hi, please feel free to email me at",
  email: "shafaghrastegari@gmail.com",
};

const experiences = {
  show: false,
  heading: "Experiences",
  data: [
    {
      role: 'Software Engineer',// Here Add Company Name
      companylogo: require('../assets/img/dell.png'),
      date: 'June 2018 – Present',
    },
    {
      role: 'Front-End Developer',
      companylogo: require('../assets/img/boeing.png'),
      date: 'May 2017 – May 2018',
    },
  ]
}

// Blog SECTION
// const blog = {
//   show: false,
// };

export { navBar, mainBody, about, repos, skills, getInTouch, experiences };
