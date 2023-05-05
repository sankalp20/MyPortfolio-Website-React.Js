// import project1 from "./../../assets/project1.png";
export const ProjectData = [
  {
    id: 1,
    title: "MultiHosp Connect",
    about:
      "A patient diagnosis and referral system powered by Cloud that will help patients and doctors to coordinate with multiple hospitals using Rapid API and make the treatment-transfer process fast & easy by storing & managing the data.",
    tags: [
      "HTML/CSS",
      "ReactJs",
      "MySQL",
      "API",
      "Node.js",
      "Firebase",
      "Cloud(Storage and Database)",
    ],
    demo: "",
    github:
      "https://github.com/sankalp20/Cloud-based-Patient-Diagnosis-and-Referral-System",
    image:
      "https://drive.google.com/file/d/1LwQyHf_zCcN80RvYlSUobCTqjwVx8W3y/view?usp=share_link",
  },
  {
    id: 2,
    title: "Emergency VITConnect",
    about:
      "A web application that will help the students to get the best emergency medical assistance by connecting parallelly the doctors & proctor for approval using real-time API, prior to connecting to the ambulance service point specially designed for VIT Bhopal students.",
    tags: ["Java", "HTML/CSS", "Reactjs", "Springboot", "MySQL", "Firebase"],
    demo: "",
    github:
      "https://github.com/sankalp20/VIT-Emergency-Medical-Assistance-System-VEMAS-",
    image: (
      <img src={require("./../../assets/project2.png")} className="picture" />
    ),
  },
  {
    id: 3,
    title: "FunEdu: Mental HealthMate",
    about:
      "A React-based web application to assess the mental health of teenagers during COVID using digital media and automated suggestion generation based on user ratings and age group analysis",
    tags: ["HTML/CSS", "Reactjs"],
    demo: "",
    github:
      "https://github.com/sankalp20/VIT-Emergency-Medical-Assistance-System-VEMAS-",
    image: (
      <img src={require("./../../assets/project3.png")} className="picture" />
    ),
  },
];
