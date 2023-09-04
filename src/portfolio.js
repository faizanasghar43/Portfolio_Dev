/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Muhammad Faizan Asghar",
  title: "Hi all, I'm Faizan",
  subTitle: emoji(
    "A passionate Software Engineer 🚀 having experience of building Web Applications with Python web frameworks such as Django/FastAPI/Flask,Desktop Applications with PyQt5/Tkinter and Cloud Technolgies GCP/AWS/Digital Ocean."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1PopRBiF408sbYZP82FcT8QHhuaxD41dz/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/faizanasghar43",
  linkedin: "https://www.linkedin.com/in/faizanasghar43/",
  email: "dev@faizanasghar.tech",
  gitlab: "https://gitlab.com/faizanasghar431",
  facebook: "https://www.facebook.com/faizan.asghar.39/",
  medium: "https://medium.com/@bsce19021",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY ABOUT BACKEND TECHNOLOGIES AND CLOUD",
  skills: [
    emoji(
      "⚡ Develop maintainable and scaleable for your web mobile applications"
    ),
    emoji(
      "⚡ Integration of third party services such as GCP/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "django",
      fontAwesomeClassname: "fa fa-django"
    },
    {
      skillName: "fastapi",
      fontAwesomeClassname: "fa fa-bolt"
    },
    {
      skillName: "flask",
      fontAwesomeClassname: "fa fa-flask"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fa fa-cloud"
    },
    {
      skillName: "mongodb",
      fontAwesomeClassname: "fa fa-database"
    },
    {
      skillName: "mysql",
      fontAwesomeClassname: "fa fa-database"
    },
    {
      skillName: "postgres",
      fontAwesomeClassname: "fa fa-database"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};


// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Information Technology University",
      logo: require("./assets/images/ITU-logo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Engineering",
      duration: "July 2019 - August 2023",
      desc: "Took courses about Software Engineering, Cloud Computing, Operating Systems, Object Oriented Programming and Data Structures"
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python",
      progressPercentage: "90%"
    },
    {
      Stack: "Django", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "FastAPI",
      progressPercentage: "80%"
    },
    {
      Stack: "Flask",
      progressPercentage: "80%"
    },
    {
      Stack: "AWS",
      progressPercentage: "60%"
    },
    {
      Stack: "GCP",
      progressPercentage: "60%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Zweidevs",
      companylogo: require("./assets/images/zwei.jpeg"),
      date: "September 2023 – Present",
      desc:"At Zweidevs, I serve as a Software Engineer, specializing in Django web development.I've been committed to crafting robust and scalable web applications. Leveraging the power of Django, I create efficient solutions and prioritize delivering exceptional user experiences."
    },
    {
      role: "Trainee Python Developer",
      company: "Synares Systems",
      companylogo: require("./assets/images/synares.jpeg"),
      date: "June 2023 – August 2023",
      desc: "Worked as a Trainee Python Developer at Synares Systems with prime focus of learning to develop maintainable and scalable web applications",
      descBullets:["Improved Lumi-AI LLM model with Core Python and Flask",
      "Developed a MusicApp with FastApi and MongoDB"
    ]
    },
   
    {
      role: "Web Developer",
      company: "Buzz Interactive",
      companylogo: require("./assets/images/BUZZ-new-logo.png"),
      date: "November 2022 – May 2023",
      desc: "During 7th semester of my degree program I started my career as Web Developer at Buzz Interactive",
      descBullets: [
        "Specialized in customizations, integrations, and template development in Liquid",
        "Maintained Digital Ocean and Google Cloud Platform deployed websites, renewing SSL, updating themes and CMS",   
     ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",
  achievementsCards: [
    {
      title: "AWS Academy Graduate - AWS Academy Data Analytics",
      subtitle:
        "Proud AWS Academy Data Analytics Graduate 🎓",
      image: require("./assets/images/da.png"),
      imageAlt: "AWS Academy Graduate - AWS Academy Data Analytics",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/badges/0bf41e2f-be4f-4425-af5e-61b9af5bca16/linked_in_profile"
        }
      ]
    },
    {
      title: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      subtitle:
        "Certified AWS Academy Cloud Foundations Graduate 🎓",
      image: require("./assets/images/cf.jpeg"),
      imageAlt: "AWS Academy Graduate - AWS Academy Cloud Foundations",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/affafc8e-1a2d-4d03-8b8f-0df6a4ad03c8"
        }
      ]
    },
    {
      title: "Crash Course on Python by Google",
      subtitle:
        "Survived Google's Crash Course To Master Python Fundamentals 🚀",
      image: require("./assets/images/images.png"),
      imageAlt: "Crash Course on Python",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.credly.com/earner/earned/badge/affafc8e-1a2d-4d03-8b8f-0df6a4ad03c8"
        }
      ]
    },
    {
      title: "Introduction to SQL for BigQuery and Cloud SQL",
      subtitle:
        "Unlocked the power of SQL for BigQuery and Cloud SQL in this course! 📊🔍 🚀",
      image: require("./assets/images/images.png"),
      imageAlt: "Introduction to SQL for BigQuery and Cloud SQL",
      footerLink: [
        {
          name: "Certification",
          url: "https://coursera.org/share/35a67efd819224c6cc9e7b33b811b0ae"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://medium.com/@bsce19021/fastapi-scheduling-with-async-python-using-schedulinx-df4152b73ddd",
      title: "FastAPI Scheduling with Async Python using schedulinx",
      description:
        "Master asynchronous task scheduling in FastAPI with schedulinx for real-time web app excellence! 🚀📅"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3064613458",
  email_address: "dev@faizanasghar.tech"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable
};
