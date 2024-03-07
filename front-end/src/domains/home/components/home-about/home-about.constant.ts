interface AboutPanel {
  title: string;
  content: string;
}

export const aboutPanels: AboutPanel[] = [
  {
    title: "The Team",
    content:
      "We are a team of developers who are passionate about creating games and we are excited to share our work with you.",
  },
  {
    title: "The Process",
    content:
      "We are constantly working on improving the game and adding new features. We are excited to share our work with you and we hope that you enjoy playing the game as much as we enjoy creating it.",
  },
];

export const credits = [
  {
    department: "Engineering",
    roles: [
      {
        name: "Dustin Jackson",
        role: "Tech Lead",
      },
      {
        name: "Brandon Barnes",
        role: "Senior Software Engineer",
      },
      {
        name: "Mary Elenius",
        role: "Senior Software Engineer",
      },
      {
        name: "Samson Perry",
        role: "Software Engineer",
      },
      {
        name: "Patrick Blair",
        role: "Software Engineer",
      },
      {
        name: "Benjamin Reit",
        role: "Software Engineer",
      },
    ],
  },
  {
    department: "Design",
    roles: [
      {
        name: "Amber Jackson",
        role: "Design Lead",
      },
      {
        name: "Andy Lonning",
        role: "Senior UI/UX Designer",
      },
      {
        name: "Gretchen Cerny",
        role: "Senior UI/UX Designer",
      },
      {
        name: "Joe Skar",
        role: "Senior UI/UX Designer",
      },
      {
        name: "Brian Thyfault",
        role: "Senior UI/UX Designer",
      },
    ],
  },
  {
    department: "Management",
    roles: [
      {
        name: "Jake McInerney",
        role: "Product Manager",
      },
    ],
  },
];
