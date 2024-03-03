import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Saad Mankarious",
  title: "Hi all, I'm Saad",
  description:
    "I'm a passionate programmer with experience developing Full Stack web applications with Java SpringBoot, Django, NodeJS, React, and Cloud Technologies. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://docs.google.com/document/d/1GRNrtpPScX48q7G369T2q8UFus6kZuhZ/edit?usp=sharing&ouid=104445685177817733991&rtpof=true&sd=true",
};

export const openSource = {
  githubUserName: "SaadMakhalSaad2",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:gosaadmakhal@gmail.com",
  linkedin: "https://www.linkedin.com/in/saad-mankarious-1a683019b/",
  github: "https://github.com/SaadMakhalSaad2",
  instagram: "https://www.instagram.com/saadmankarious/",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "Passionate full-stack and mobile apps developer who will make a difference within your team",
  data: [
    {
      title: "Diverse Skill Set",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Backend development with Java Spring Boot, Node JS, Django, Drupal PhP, MySql, and MongoDB"),
        emoji("⚡ Building responsive frontends with React.js and Angular"),
        emoji("⚡ Building native mobile applications with Flutter and ReactNative"),
        emoji("⚡ Facilitating Git and Docker for robust development"),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          iconifyTag: "logos:java",
        },
        {
          skillName: "SpringBoot",
          iconifyTag: "logos:spring",
        },
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Node JS",
          iconifyTag: "logos:nodejs",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Angular",
          iconifyTag: "logos:angular",
        },
        {
          skillName: "Flutter",
          iconifyTag: "logos:flutter",
        },
        {
          skillName: "Firebase",
          iconifyTag: "logos:firebase",
        },
        {
          skillName: "MySql",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Git",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Backend", //Insert stack or technology you have experience in
    progressPercentage: "90", //Insert relative proficiency in percentage
  },
  {
    Stack: "Frontend",
    progressPercentage: "85",
  },
  {
    Stack: "Mobile Development",
    progressPercentage: "85",
  },
  {
    Stack: "DevOps",
    progressPercentage: "90",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "Cornell College",
    subHeader: "Bachelor of Arts in Computer Science",
    duration: "September 2020 - May 2025",
    desc: "Courses in Software development, Machine Learning, and Data analysis",
    grade: "3.9 GPA",
    descBullets: [], // Array of Strings
  },
  {
    schoolName: "African Leadership Academy",
    subHeader: "Pre-university diploma",
    duration: "September 2020 - Jue 2022",
    desc: "Courses in Entrepreneurship, Business, and Computer Science",
    grade: "Johannesburg, South Africa",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Software Developer Intern",
    company: "Bio::Neos",
    companyLogo: "/img/icons/common/bioneos.png",
    date: "May 2023 - October 2023",
    desc: "Developed full stackk applications using PhP, NodeJS, Angular, and SpringBoot. Facilitated docker for virtualization and git for version control. Communicated with clients for specification and feedback.",
  },
  {
    role: "Student Worker",
    company: "Computer Science Department",
    companyLogo: "/img/icons/common/cornell.png",
    date: "Jan 2023 - May 2023",
    desc: "Administrated linux servers and streamlined professors and students' access to resources.",
  },

];

// export const projects: ProjectType[] = [
//   {
//     name: "Giebo",
//     desc: "A Podcast Platform where creators can easily publish and sell their podcasts, and users can purchase with Handcash BitcoinSV, the future of fast and secure transactions.",
//     link: "https://gibeo.io/",
//   },
//   {
//     name: "O Mejor Oferta",
//     desc: "O Mejor Oferta is a mobile marketplace for buying and selling items nearby, helping users find deals on things they want and make money from items they no longer need.",
//     link: "https://play.google.com/store/apps/details?id=com.duseca.mejor_oferta",
//   },
//   {
//     name: "Hooligan Culture",
//     desc: "A Ecommerce Platform, where shopping meets the future! With HandCash BitcoinSV integration, you can authenticate and purchase products with ease and confidence.",
//     link: "https://hooliganculture.com/",
//   },
// ];

// export const feedbacks: FeedbackType[] = [
//   {
//     name: "Syed Jamal",
//     role: "Frontend Developer at Meganos Software",
//     feedback:
//       "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
//   },
// ];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Saad Mankarious",
  description: greetings.description,
  author: "Saad Mankarious",
  image: "https://media.licdn.com/dms/image/D4D03AQHEDxLlUl2sgA/profile-displayphoto-shrink_400_400/0/1707813008881?e=1715212800&v=beta&t=uIq7Wff99SEqk-RJ2bB3xM74LKKZKzkJgvYVgxI73fk",
  // url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Saad",
    "Saad Mankarious",
    "@saadmankarious",
    "saadmankarious",
    "Portfolio",
    "Saad Portfolio ",
    "Saad Mankarious Portfolio",
  ],
};
