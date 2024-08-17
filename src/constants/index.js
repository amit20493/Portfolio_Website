import project1 from "../assets/project1.png";
import project2 from "../assets/project2.png";
import project3 from "../assets/project3.png";
import project4 from "../assets/project4.png";



export const line = `Weaving Dreams with Code, Passion in ML & NLP, Seeking Horizons as a Full-Time Software Engineer.`;

export const About_Me = `Hi there! I'm a passionate Full Stack Developer with a deep interest in Machine Learning, NLP, and Information Retrieval. I graduated from IIIT Delhi in June 2024 with a degree in Computer Science. My skills span Python, Java, R, HTML/CSS, JavaScript, SQL, ReactJS, and Bootstrap. I've developed a Disease Prediction System, a Cross-Lingual IR System, and real-time web servers for microbiome diagnostics.

I've worked independently and at the Microbiome Informatics Lab, creating widely used web servers. I thrive in agile environments and am excited about new technologies like LLMs and Generative AI. I'm exploring roles focused on innovation, customer solutioning, and product reliability.

Outside of work, I've volunteered with NGOs like Multi Vision Foundation, helping underprivileged students and collecting data on drug addiction. I was also recognized on the Dean's List at IIIT Delhi.

Feel free to reach out if you'd like to collaborate. Let's create something amazing together!
`;

export const Experiences = [
  {
    year: "Feb,23 - May,24",
    role: "Full Stack Developer",
    company: "MicroBiome Informatics Lab , IIITD",
    description: `• Developing real-time web server for microbiome diagnostics, employing functional clustering techniques, will be used
 by students and researchers worldwide.
 • Developed frontend using React.js, integrated APIs for seamless communication, and assisted in backend tasks
 with Python.
 • Created initial version of lab website in React.js, incorporating EmailJS functionality for visitor inquiries.
 • Collaborated with cross-functional teams to ensure project milestones were met on time and within budget`,
    
    technologies: ["Javascript", "React.js", "Python", "FastApi","Api Development","Research"],
  },
  
];

export const PROJECTS = [
  {
    title: " Multiple Disease Prediction System",
    image: project1,
    description:
      "Developed a disease prediction system using Streamlit for classification problems, specifically targeting breast cancer, diabetes, and heart disease predictions.Comparing various ML Algorithms like Logistic Regression, SVM, Random Forest to identify most accurate model for prediction. Developed frontend for user experience using Streamlit, ensuring an intuitive and interactive interface. Deployed the Streamlit application on Streamlit sharing platform, enabling seamless access for users worldwide.",
    technologies: ["Python","Machine learning" , "Classification Algorithms", "Streamlit", "user interface"],
  
  },
  {
    title: " Cross Lingual Information Retrieval System",
    image: project2,
    description:
      "Developed a cross-lingual Information retrieval system for Shrimad Bhagavad Geeta enable users to search and retrieve information from sacred text in multiple languages. Implemented the bm25 and TFIDF algorithms to calculate relevance scores for search queries. Improve the accuracy and precision of our ranking model.",
    technologies: ["Python","Information Retrieval ","NLP","Streamlit"],
  },
  
  {
    title: "Game Development Using JavaFX and OOPS Concepts",
    image: project3,
    description:
      "Developed GUI based 2D snake and ladder game using JavaFX.Used JavaFX to create a GUI that supports actions such as general ludo gameplay. Implemented object-oriented programming practices such as inheritance to build app logic.",
    technologies: ["java", "javafx","game development"],

  },

  {
    title: "Simple React Code Editor",
    image: project4,
    description:
      "A simple no-frills code editor with syntax highlighting.",
    technologies: ["html", "css","javascript","ReactJs","PrismJs"],

  },

];

export const CONTACT = {
  address: "Delhi, India ",
  email: "astargaming324@gmail.com",
};