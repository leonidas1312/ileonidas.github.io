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
      projectName: "Qubit efficient variational quantum classical QUBO solver ",
      image: "images/streamlit1.jpg",
      summary:
        "Developed a full stack web application where the user can create multiple optimization problems (Tail assignment, Vehicle routing, etc..) and solve them using a qubit efficient variational quantum algorithm.",
      preview: "https://github.com/leonidas1312",
      techStack: ["Streamlit", "Qubit efficient", "Variational quantum classical", "Qiskit", "Tensorflow"],
    },
    {
      projectName: "Software for creating optimization problems online",
      image: "images/planes.jpg",
      summary:
        "Developed software for creating and visualizing optimization problems like the Vehicle Routing, Tail Assignment, Flight Gate Assignment online using data from online sources, ",
      preview: "https://github.com/leonidas1312",
      techStack: ["Streamlit", "Qubit efficient", "Variational quantum classical", "Qiskit", "Tensorflow"],
    },
  ],
  softwareProjects: [
    {
      projectName: "MoMo trading bot",
      image: "images/Neural-Networks-Architecture.png",
      summary:
        "Trained a neural network to predict stock prices with data found online.",
      preview: "https://github.com/leonidas1312/MoMo-trading-bot",
      techStack: ["Streamlit", "PyTorch", "yFinance"],
    },
  ],
  freelanceProjects: [
    {
      projectName: "Reinforcement learning based enchancement of QUBO solvers",
      image: "images/gpuRL.PNG",
      summary:
        "Classical RL method designed to run on GPUs with the purpose of enchancing classical bitstring solutions using a problem based reward system.",
      preview: "https://dias.library.tuc.gr/view/99392?locale=en",
      techStack: ["GPU based", "UCB score", "Exploration & Exploitation"],
    },
    {
      projectName: "Reinforcement learning based food recommendations based on real data",
      image: "images/Structure-of-a-recommender-system.png",
      summary:
        "Developed an RL recommendation system that recommends food products to users based on their weekly budget and dietary constraints but ensuring variety of products.",
      preview: "https://github.com/leonidas1312",
      techStack: ["Recommendation system", "Pandas", "Weekly recommendations", "Multiple products"],
    },
  ],
};

export const researchAndAwards = [
    {
        title: "Qubit efficient quantum optimization for VRPTW",
        description: "Exploring the Vehicle Routing Problem with Time Windows using quantum algorithms for enhanced optimization. Published at Advanced Quantum Technologies journal.",
        image: "images/vrptw.PNG",
        link: "https://onlinelibrary.wiley.com/doi/abs/10.1002/qute.202300309",
        keywords: ["Quantum computing", "Optimization", "VRP"],
        date: "April 2024"
    },
    {
        title: "Academic fellowship from the Technical University of Crete",
        description: "Recognized for contributions as a teaching/lab assistant in Physics/Quantum technologies class. ",
        image: "images/tuc_sign.png",
        link: "https://www.tuc.gr/el/archi",
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
    title: "Angelakis research group / AngelQ startup",
    duration: "October 2020 - February 2024",
    subtitle: "Quantum software engineer",
    details: ['Developed full stack web application where you create/visualize optimization problems and solve them using qubit efficient quantum algorithms',
             ],
    tags: ["QUBO", "Quantum computing", "Research & Developement", "Web application", "Python"],
    icon: "brain ",
  },
  {
    title: "EU Horizon program in Technical University of Crete",
    duration: "February 2023 - Dec 2023",
    subtitle: "Researcher",
    details: [
      `Research on Quantum Computational Fluid Dynamics`,
      `Implemented variational quantum algorithms for non linear problems`,
    ],
    tags: [
      "Research",
      "Variational quantum algorithms",
      "Non linear physics problems",
      "Computational fluid dynamics",
      "Optimization",
    ],
    icon: "flask",
  },
  {
    title: "Centre for Quantum Technologies at the National University of Singapore",
    duration: "July 2022 - August 2022",
    subtitle: "Visiting researcher",
    details: [
      `Research on qubit efficient variational quantum algorithms for the vehicle routing problem`,
    ],
    tags: ["Python", "Research", "Quantum optimization", "Qubit efficient variational algorithms"],
    icon: "cogs",
  },
  {
    title: "Technical University of Crete",
    duration: "October 2021 - August 2023",
    subtitle: "Teaching assistant",
    details: [
      `Assisted in teaching undergraduate students in Physics and Quantum Technologies courses`,
    ],
    tags: ["Physics101", "Quantum technology", "Python",],
    icon: "group",
  },
];

export const education = [
  {
    title: "MSc in Quantum Technologies",
    duration: "2021 - 2023",
    subtitle: "Technical University of Crete",
    details: [],
    tags: [
      "Variational Quantum Algorithms",
      "Probabilistic Graphical Models",
      "Inference",
      "Mathematical Optimization",
      "Qubit Efficient Variational Quantum Algorithms",
      "Cloud Computing",
    ],
    icon: "graduation-cap",
  },
  {
    title: "Electrical & Computer Engineer",
    duration: "2014-2021",
    subtitle: "Technical University of Crete",
    details: [],
    tags: ["Mathematics", "Coding", "System design", "Quantum technology"],
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
