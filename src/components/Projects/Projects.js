import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
{/*import projectimg from "../../Assets/Projects/img.png";
  Do the same for any further projects*/}

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Library Loan Analysis"
              description="Add description"
              ghLink="https://github.com/UltraInfinity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="U.S. Medical Insurance"
              description="In this data analysis project, I explored and dissected data related to U.S. medical insurance costs. Using Python, I cleaned and organized the data, performed statistical analyses, and created visualizations to uncover insights. This project demonstrates my proficiency in data manipulation, analysis, and visualization techniques, essential skills for data scientists."
              ghLink="https://github.com/UltraInfinity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Data Visualization - GDP and Life Expectancy"
              description="This project showcases my expertise in data visualization. I analyzed data on GDP and life expectancy, transforming raw information into meaningful visual representations. Through graphs and charts, I communicated complex relationships and patterns, highlighting my ability to convey insights effectively to both technical and non-technical audiences."
              ghLink="https://github.com/soumyajit4419/Editor.io"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Biodiversity in National Parks"
              description="In this data analysis endeavor, I delved into datasets concerning endangered animal populations in national parks. Using data analysis techniques, I extracted valuable information for the National Park Service. This project demonstrates my aptitude for interpreting data, drawing conclusions, and presenting findings to address real-world challenges."
              ghLink="https://github.com/UltraInfinity"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              /*imgPath={}*/
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
