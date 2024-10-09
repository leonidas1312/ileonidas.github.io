export const bio = [
  "Hello. I'm Ioannis D. Leonidas, a passionate quantum software engineer focused on solving complex problems using cutting-edge quantum algorithms.",
  "I am enthusiastic about continuous learning and improvement, especially in challenging and nearly impossible tasks.",
  "Thanks for visiting!",
];

export const skills = [
  {
    title: "Programming languages",
    skillName: "Python, Java, C, SQL",
    color: "1",
    percentage: "100",
  },
  {
    title: "Frameworks/Libraries",
    skillName: "QISKIT, Circ, PennyLane, TensorFlow",
    color: "6",
    percentage: "90",
  },
  {
    title: "Quantum computing",
    skillName: "Quantum approximate optimization algorithms, Variational quantum algorithms",
    color: "4",
    percentage: "90",
  },
  {
    title: "Mathematical optimization",
    skillName: "Quadratic unconstrained binary optimization, Mixed integer optimization",
    color: "7",
    percentage: "90",
  },
];

export const projects = {
  webProjects: [
    {
      projectName: "Variational quantum classical QUBO solver ",
      image: "images/programmingdiaries.png",
      summary:
        "Developed a full stack web application where the user can create multiple optimization problems (Tail assignment, Vehicle routing, etc..) and solve them using a qubit efficient variational quantum algorithm.",
      preview: "https://github.com/leonidas1312",
      techStack: ["Streamlit", "Qubit efficient", "Variational quantum classical", "Qiskit", "Tensorflow"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Reinforcement learning based enchancement of QUBO solvers",
      image: "images/pizzaorderchatbot.png",
      summary:
        "Classical RL method designed to run on GPUs with the purpose of enchancing classical bitstring solutions using a problem based reward system.",
      preview: "https://github.com/leonidas1312",
      techStack: ["Dailogflow", "Firebase"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "MoMo trading bot",
      image: "images/snylloair.png",
      summary:
        "Trained a neural network to predict stock prices with data found online.",
      preview: "https://github.com/leonidas1312/MoMo-trading-bot",
      techStack: ["Streamlit", "PyTorch", "yFinance"],
    },
  ],
};

export const researchAndAwards = [
    {
        title: "Qubit efficient quantum optimization for VRPTW",
        description: "Exploring the Vehicle Routing Problem with Time Windows using quantum algorithms for enhanced optimization. Published at Advanced Quantum Technologies journal.",
        image: "images/vrptw.png",
        link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/qute.202300309",
        keywords: ["Quantum computing", "Optimization", "VRP"],
        date: "April 2024"
    },
    {
        title: "Academic fellowship from the Technical University of Crete",
        description: "Recognized for contributions as a teaching/lab assistant in Physics/Quantum technologies class. ",
        image: "images/tuc_sign.png",
        link: "",
        keywords: ["Teaching assistant", "Quantum technology", "Physics education"],
        date: "July 2022"
    },
    {
        title: "Representative of Greece at the Quantum Future Academy",
        description: "Enjoyed a lot of talks from quantum experts, learned why quantum technology is important from some top tier worldwide companies.",
        image: "images/quantum_future_academy.jpg",
        link: "https://www.icfo.eu/news/1748/quantum-future-academy-berlin-1-7-november-2020-/",
        keywords: ["Quantum technology", "Innovation", "Research and developement"],
        date: "November 2020"
    }
];




export const experience = [
  {
    title: "Shiprocket (Bigfoot Solution Private Limited)",
    duration: "September 2022 - Present",
    subtitle: "Software Engineer",
    details: ["Working in support and escalation team."],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "truck ",
  },
  {
    title: "Biofourmis India Private Limited",
    duration: "April 2022 - Jul 2023",
    subtitle: "Software Engineer",
    details: [
      `Implemented microfrontends using the Module Federation Plugin in Angular.
            Rendered components from remote modules/repositories, enabling a modular and scalable architecture`,
      `Upgraded application with a dynamic base URL for flexible operation across multiple regions and verticals, leading to
            recognition with the Biofourmis Bravo award in Q1, 2023.`,
      `Implemented RxState for managing local state in components, resulting in elegant and reactive facades.`,
      `Utilized Twilio-Video for group video call rooms and Countly for Web Analytics.`,
      `Integrated NGXS WebSocket, enhancing state management and replacing legacy service injections.`,
      `Implemented extensive RxJS usage for reactive programming, resulting in efficient data handling, improved state
            management, and enhanced application performance.`,
      `Dramatically optimized load time and performance through code splitting, lazy loading, caching, and preload`,
      `Enhanced video call experience by implementing real-time switching of I/O devices and audio level indicators,
            resulting in reduced audio issues and increased user satisfaction.`,
      `Owned and led successful Angular application upgrades from version 12 to 13 and 14, improving performance
            and enhancing features.`,
    ],
    tags: [
      "JavaScript",
      "Angular",
      "RxJS",
      "NGXS",
      "TypeScript",
      "RxState",
      "Webpack",
      "Optimization",
    ],
    icon: "heartbeat",
  },
  {
    title: "Novopay Solutions Private Limited",
    duration: "June 2020 - April 2022",
    subtitle: "Software Engineer",
    details: [
      `Implemented AePS Services, including Bio-metric eKYC, Cash Withdrawal, Balance Enquiry, Mini-Statements,
            and Money transfer.`,
      `Implemented QR Code integration for retailer wallet money loading, Clevertap events for user action tracking,
            Freshdesk ticketing, Chatbot services, and Retailer onboarding/admin interfaces.`,
      `Developed retailer QR code system for seamless money loading into wallets, resulting in improved user transactions.`,
      `Achieved 70 percent code coverage of the entire application by writing unit tests for legacy code.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Nodejs", "Jenkins"],
    icon: "qrcode",
  },
  {
    title: "ThinkPedia LLP",
    duration: "May 2019 - June 2019",
    subtitle: "SDE Intern",
    details: [
      `Developed a customer web application for social media management, supporting the advertisement domain.`,
    ],
    tags: ["JavaScript", "Angular", "Bootstrap", "Java", "Spring Boot"],
    icon: "group",
  },
];

export const education = [
  {
    title: "B.Tech. in Computer Science and Engineering",
    duration: "2016 - 2020",
    subtitle: "National Institute of Technology, Warangal",
    details: [],
    tags: [
      "Data Structures & Algorithms",
      "Operating Systems",
      "Database Management System",
      "Computer Networks",
      "Compiler Designing",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Class 12th in Science and Mathematics",
    duration: "",
    subtitle: "Board of Secondary Education, Rajasthan",
    details: [],
    tags: ["Physics", "Chemistry", "Mathematics"],
    icon: "book",
  },
];

export const footer = [
//   {
//     label: "Dev Profiles",
//     data: [
//       {
//         text: "Stackoverflow",
//         link: "https://stackoverflow.com/users/8461233/vinay-somawat",
//       },
//       {
//         text: "GitHub",
//         link: "https://github.com/vinaysomawat",
//       },
//       {
//         text: "LeetCode",
//         link: "https://leetcode.com/somawatvinay/",
//       },
//     ],
//   },
//   {
//     label: "Resources",
//     data: [
//       {
//         text: "Enable Dark/Light Mode",
//         func: "enableDarkMode()",
//       },
//       {
//         text: "Print this page",
//         func: "window.print()",
//       },
//       {
//         text: "Clone this page",
//         link: "https://github.com/vinaysomawat/vinaysomawat.github.io",
//       },
//     ],
//   },
  {
    label: "Chess quote",
    data: [
      {
         text: "A good player is always lucky. - Jose Raul Capablanca.",
         link: "https://en.wikipedia.org/wiki/Jos%C3%A9_Ra%C3%BAl_Capablanca",
       },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Made with &hearts; by Ioannis D. Leonidas.",
    ],
  },
];
