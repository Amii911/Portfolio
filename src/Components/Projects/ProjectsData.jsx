import restroom from "../../Assets/RRNYC.png"
import blog from "../../Assets/BlogginB.png"
import transaction from "../../Assets/TransXceed.jpg"

const ProjectsData = [
    {
      name: "Restroom Radar NYC",
      summary: "Restroom Radar NYC is your ultimate companion for seamless bathroom hunting across the bustling streets of New York City. ",
      stack: "React front-end, Python backend with Flask API. Bcrypt for user authentication and authorization. Redux global state handling.",
      github: "https://github.com/Amii911/Restroom-Radar-NYC",
      walkthrough: "https://youtu.be/IGvnnkiywwo",
      technologies: ["JavaScript", "React", "Python", "Flask", "HTML/CSS", "Redux", "Formik", "Bycrypt"],
      livedemo: false,
      image: restroom,
      details: {
        description: "Restroom Radar NYC is your ultimate companion for seamless bathroom hunting across the bustling streets of New York City. Say goodbye to urgent searches and long restroom lines – our app employs cutting-edge technology to pinpoint the nearest accessible restrooms. With real-time updates and user-friendly navigation, Restroom Radar NYC ensures your comfort and convenience while exploring the city that never sleeps.",
        keyFeatures: [
          "Milestone Tracking: Users can add and track their life milestones and accomplishments.",
          "React Front-End: The platform's front-end is built using React for an interactive user experience.",
          "Python Backend: The backend is powered by Python and utilizes a Flask API for handling requests.",
          "User Authentication: Utilizes Bcrypt for secure user authentication and authorization.",
          "Global State Handling: Redux is employed for efficient global state management.",
          "Technologies: The project employs JavaScript, React, Python, Flask, HTML, CSS, and Redux."
        ],
        technologyStack: [
          "Front-End: Built with React to offer a dynamic and interactive user interface.",
          "Back-End: Python backend with Flask API for handling server-side operations.",
          "User Authentication: Implements Bcrypt for secure user authentication and authorization.",
          "Global State Management: Leverages React's UseContext for efficient state management.",
          "Technologies: Utilizes JavaScript, React, Python, Flask, HTML, CSS, and Redux."
        ],
        achievements: [
          "Created a social platform for tracking and sharing public restrooms in NYC.",
          "Incorporated React for an engaging and interactive front-end user experience."
        ]
      },
      caseStudy: {
        problem: "People often struggle with sharing findging public restrooms in NYC.",
        solution: "Restroom Radar NYC provides a platform where users can record and reviews on public restrooms in NYC.",
        media: [
          { type: "gif", url: "", alt: "RR NYC demo" }, 
        ]}
    },
    {
      name: "Bloggin Blog",
      summary: "A React built application using create-react-app. Bloggin Blog is a space for users to share their story, speak their mind and even hang onto a memeory. ",
      stack: "React front-end, JSON back-end",
      github: "https://github.com/Amii911/bloggin-blog",
      walkthrough: "https://youtu.be/2LukRw3nzuI",
      technologies: ["JavaScript", "React", "HTML/CSS"],
      livedemo: false,
      image: blog,
      details: {
        description: "Bloggin Blog is a React application designed to record and share blogs amongst users.Create a beautiful blog today. Bloggin Blog is a space for users to share their story, speak their mind and even hang onto a memeory. Users are able to build, manage, and delete blogs easily with Bloggin Blog. Join millions today and create a blog with Bloggin Blog.",
        keyFeatures: [
          "Blog Recording: Allows users to record details about their encounters.",
          "React Application: Features a React front-end and a JSON back-end.",
          "User-Friendly Interface: Offers a user-friendly and intuitive interface for creating blogs.",
          "Technologies: The project utilizes JavaScript, React, HTML, and CSS."
        ],
        technologyStack: [
          "Front-End: Built with React to provide an interactive and visually appealing user interface.",
          "User-Friendly Interface: Provides a user-friendly interface for recording and managing blogs.",
          "Technologies: Employs JavaScript, React, HTML, and CSS."
        ],
        achievements: [
          "Created an interactive and user-friendly front-end interface using React."
        ]
      }, 
      caseStudy: {
        problem: "New creative way for end users to create a blog.",
        solution: "Blogging Blog allows users to log their thoughts and encounters, providing a convenient way to organize and review their experiences.",
        media: [
          { type: "image", url: "", alt: "Blog Solution" },
        ]
      }
    },
    {
      name: "TransXceed",
      summary: "A Command Line Interface Application designed to streamline investments.",
      stack: "Python backend with SQLAlchemy database. No GUI; entirely designed using text and special characters. ",
      github: "https://github.com/Amii911/TransXceed",
      walkthrough: "https://youtu.be/a6B-StFFslU",
      technologies: ["Python", "SQL", "SQLAlchemy", "CLI", "Alembic"],
      livedemo: false,
      image: transaction,
      details: {
        description: "TransXceed is a Command Line Interface (CLI) application, it is a new way to track and view your investments. How exiting would it be to have a new system where you can create and delete these new investments? This application is a Command Line Interface allows users to query from a SQLAlchemy database of investments, users, and transactions. The database is set up with many-to-many relationships backrefered through the users table. Users can have many investments and users can have many transactions.The project is built with a Python backend and utilizes the SQLAlchemy database library for efficient transactions. It provides a text-based design for interacting with the application.",
        keyFeatures: [
          "CLI Application: Designed as a Command Line Interface (CLI) application for efficient text-based interactions.",
          "Investments and Transactions: Streamlines the process of creating investments and viewing transactions.",
          "Python Backend: Features a Python backend for handling application logic and data management.",
          "SQLAlchemy Database: Utilizes SQLAlchemy for efficient management and querying of the database.",
          "Efficient Data Management: Employs Alembic for efficient database migrations.",
          "Technologies: The project utilizes Python, SQL, SQLAlchemy, CLI, and Alembic."
        ],
        technologyStack: [
          "Python Backend: Built with Python to handle the application's logic and data management.",
          "Database: Utilizes SQLAlchemy for efficient and organized database management.",
          "CLI Application: Designed as a Command Line Interface (CLI) application for text-based interactions.",
          "Database Migrations: Employs Alembic for efficient database schema management and migrations.",
          "Technologies: Employs Python, SQL, SQLAlchemy, CLI, and Alembic."
        ],
        achievements: [
          "Developed a CLI application for streamlined hiring and booking of event staff.",
          "Created an efficient data management system using SQLAlchemy and Alembic.",
          "Implemented a text-based design for interacting with the application."
        ]
      }, 
      caseStudy: {
        problem: "TBD.",
        solution: "TBD",
        media: [
          { type: "image", url: "", alt: "TransXceed Solution" },  
        ]
      }
    }
  ]
  
  

export default ProjectsData