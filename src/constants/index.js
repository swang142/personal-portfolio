import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  c,
  cpp,
  java,
  python,
  php,
  numpy,
  pandas,
  sql,
  css,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  tailwind,
  typescript,
  digitera,
  codeninjas,
  wca,
  chess,
  reminisce,
  riskify,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Full-Stack Developer",
      icon: web,
    },
    {
      title: "Software Engineer",
      icon: mobile,
    },
    {
      title: "Machine Learning Enthusiast",
      icon: backend,
    },
    {
      title: "National Champion Speedsolver",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Java",
      icon: java,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "C",
      icon: c,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Mongo DB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Numpy",
      icon: numpy,
    },
  ];
  
  const experiences = [
    {
      title: "Full-Stack Developer",
      company_name: "Digitera Interactive",
      icon: digitera,
      iconBg: "#383E56",
      date: "February 2023 - June 2023",
      points: [
        "Implemented and tested functionalities for PromPlanner web application using HTML5, CSS, PHP/Laravel, and JavaScript to organize attendees, display event details, and facilitate feedback submission.",
        "Handled local databases in MySQL to ensure integration between Student, Prom Committee, and Prom Vendor parties.",
        "Pioneered the launch of the Songs and Requests feature, enabling students to view/create/vote on requests using an interactive web UI, while admins could approve/deny requesters and modify requests based on the CRUD paradigm model.",
        "Collaborated weekly with senior developers to discuss project updates, share progress, and address any roadblocks.",
      ],
    },
    {
      title: "  Canadian Computing Competition (CCC) Curriculum Lead Developer, Coding Instructor",
      company_name: "Code Ninjas",
      icon: codeninjas,
      iconBg: "#E6DEDD",
      date: "MAY 2023 - SEPT 2023",
      points: [
        "Mentored over 150+ students in Scratch, Impact (JR.), C# (White - Orange Belt) and JavaScript (Purple - Black Belt), developing proficiency in coding fundamentals including user interface, controls and conditionals, and script management.",
        "Developed curriculum preparing students for the University of Waterloo’s Canadian Computing Competition (practice problems, lesson plans, and coursework outline) to be used in upcoming Summer 2024 bootcamp.",
        "Extended Ventures: Code Ninjas’ Rubik’s Cube Club Head Coach, tutored over 50 intermediate students.",
      ],
    },
    {
      title: "National Rubik's Cube Speedsolving Champion",
      company_name: "World Cube Association",
      icon: wca,
      iconBg: "#383E56",
      date: " 2017 - PRESENT",
      points: [
        "Reigning One-Handed Rubik’s Cube Canadian Champion, achieved at the 2023 CANADIAN CHAMPIONSHIP.",
        "Ranked among Canada's top solvers: 8th in 3x3 average, 10th in 4x4 single, 15th in 2x2 single, top 50 in all NxN categories.",
        "Proud SpeedCubeShop Sponsoree, Rubik’s Cube Content Creator on YouTube and Instagram.",
        "Organizer of Richmond Hill 2022, worked in close collaboration with the World Cube Association and Speedcubing Canada to assist post-COVID efforts. All proceeds were donated to the Alzheimer Society of Canada.        ",
      ],
    },
  ];
  

  
  const projects = [
    {
      name: "Reminisce — Where Memories Meet Moments",
      description:
        "Reminisce is a dynamic social app that allows users to reconnect with old friends by sharing nostalgic experiences. It intelligently organizes historical photos and notifies users when friends are nearby, facilitating spontaneous meetups at shared past locations. This innovative platform transforms the way you relive and recreate cherished memories with friends.",
      tags: [
        {
          name: "expo",
          color: "blue-text-gradient",
        },
        {
          name: "expressjs",
          color: "blue-text-gradient",
        },
        {
          name: "typescript",
          color: "green-text-gradient",
        },
        {
          name: "prisma",
          color: "pink-text-gradient",
        },
        {
          name: "sqlite",
          color: "pink-text-gradient",
        },
      ],
      image: reminisce,
      source_code_link: "https://github.com/",
    },
    {
      name: "Riskify- Portfolio Risk Quantification Tool",
      description:
        "Riskify is a sophisticated financial advisory tool that uses advanced deep learning techniques to analyze and assess investment portfolio risks with the Sharpe ratio. The tool integrates Long Short-Term Memory (LSTM) and Feed-Forward Neural Networks, enhanced with bespoke activation functions and algorithms, to forecast portfolio performance from essential quantitative metrics. It boasts a Mean Absolute Percentage Error of about 22%, demonstrating reliable predictive accuracy against historical S&P 500 data.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "numpy",
          color: "blue-text-gradient",
        },
        {
          name: "pandas",
          color: "green-text-gradient",
        },
        {
          name: "matplotlib",
          color: "pink-text-gradient",
        },
        {
          name: "keras",
          color: "pink-text-gradient",
        },
        {
          name: "scikit-learn",
          color: "pink-text-gradient",
        },
      ],
      image: riskify,
      source_code_link: "https://github.com/",
    },
    {
      name: "ChessMate",
      description:
        "ChessMate is a sophisticated chess engine designed to enhance player strategy and engagement. It utilizes an optimized minimax algorithm with alpha-beta pruning for swift and efficient gameplay, while a built-in chat feature allows for seamless real-time interaction among players.",
      tags: [
        {
          name: "java",
          color: "blue-text-gradient",
        },
        {
          name: "mysql",
          color: "green-text-gradient",
        },
        {
          name: "javafx",
          color: "pink-text-gradient",
        },
      ],
      image: chess,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, projects };