export const bio = [
  "Hello! I'm Ioannis D. Leonidas, a passionate Quantum Software Engineer focused on solving complex problems using cutting-edge quantum algorithms.",
  "I am enthusiastic about continuous learning and improvement, especially in challenging and nearly impossible tasks.",
  "Thanks for visiting!",
];

export const skills = [
  {
    title: "Programming Languages",
    skillName: "Python, C, SQL, Java, Matlab ",
    color: "1",
    percentage: "100",
  },
  {
    title: "Quantum Computing",
    skillName: "Quantum approximate optimization, Qubit efficient quantum algorithms",
    color: "6",
    percentage: "90",
  },
  {
    title: "Software Engineering",
    skillName: "Data applications, Streamlit, System design",
    color: "4",
    percentage: "95",
  },
  {
    title: "Research",
    skillName: "Mathematical optimization, Quantum optimization solvers",
    color: "3",
    percentage: "90",
  },
];

export const projects = {
  webProjects: [
    {
      projectName: "AngelQ - Quantum Software",
      image: "images/angelq.png",
      summary:
        "Quantum software engineer working on variational quantum algorithms for the NISQ era.",
      preview: "https://angelquantum.com/about/",
      techStack: ["Quantum Algorithms", "Qiskit", "Python"],
    },
    {
      projectName: "Quantum Machine Learning Course",
      image: "images/quantumml.png",
      summary:
        "Co-presenter at Erasmus+ BIP Liberec Summer School, introducing quantum machine learning to participants.",
      preview: "https://example.com/",
      techStack: ["Quantum Computing", "Qiskit", "Python"],
    },
  ],
  softwareProjects: [
    {
      projectName: "Quantum Approximate Optimization Algorithms",
      image: "images/qaoa.png",
      summary:
        "Studied and implemented QAOA to solve the Tail Assignment Problem in collaboration with Angelakis Research Group.",
      preview: "https://example.com/",
      techStack: ["QAOA", "Python", "Quantum Algorithms"],
    },
  ],
  freelanceProjects: [],
};

export const experience = [
  {
    title: "Angelakis Research Group",
    duration: "Oct 2020 - Present",
    subtitle: "Quantum Researcher",
    details: [
      "Worked on Quantum Approximate Optimization Algorithms (QAOA) and their applications.",
      "Studied performance of QAOA in solving optimization problems such as the Tail Assignment Problem."
    ],
    tags: ["QAOA", "Quantum Algorithms", "Research"],
    icon: "flask",
  },
  {
    title: "AngelQ",
    duration: "Oct 2021 - Present",
    subtitle: "Quantum Software Engineer",
    details: [
      "Focused on developing variational quantum algorithms for the NISQ era.",
    ],
    tags: ["Quantum Algorithms", "Qiskit", "Python"],
    icon: "code",
  },
  {
    title: "Center for Quantum Technologies, Singapore",
    duration: "Jul 2022 - Aug 2022",
    subtitle: "Visiting Researcher",
    details: ["Collaborated with quantum researchers on various projects."],
    tags: ["Quantum Computing", "Research"],
    icon: "laptop",
  },
  {
    title: "Erasmus+ BIP Liberec Summer School",
    duration: "May 2022",
    subtitle: "Co-presenter, Quantum Machine Learning Course",
    details: [
      "Presented implementation of a quantum classifier and supervised students on quantum teleportation algorithms."
    ],
    tags: ["Quantum Computing", "Teaching"],
    icon: "chalkboard-teacher",
  },
];

export const education = [
  {
    title: "MSc in Electrical and Computer Engineering",
    duration: "2021 - Present",
    subtitle: "Technical University of Crete, Greece",
    details: [],
    tags: ["Quantum Computing", "Electrical Engineering"],
    icon: "graduation-cap",
  },
  {
    title: "MEng in Electrical and Computer Engineering",
    duration: "2021",
    subtitle: "Technical University of Crete, Greece",
    details: [],
    tags: ["Electrical Engineering", "Computer Science"],
    icon: "graduation-cap",
  },
];

export const footer = [
  {
    label: "Links",
    data: [
      {
        text: "Thesis",
        link: "https://dias.library.tuc.gr/view/90563?locale=en",
      },
      {
        text: "AngelQ",
        link: "https://angelquantum.com/about/",
      },
    ],
  },
  {
    label: "copyright-text",
    data: [
      "Ioannis D. Leonidas.",
    ],
  },
];
