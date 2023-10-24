import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import BookLoanStats from "../../Assets/Projects/BookLoanStats.png";
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
              imgPath={BookLoanStats}
              isBlog={false}
              title="Library Loan Analysis"
              description="In this university assignment, I designed and implemented a Python program to analyze library loan data. The project involved processing data from two sources: book information and loan records. Using Python, I calculated the popularity of books based on the number of days borrowed and generated a report highlighting the most borrowed books. Additionally, I analyzed book genres, identified trends, and created a report on genre popularity. Lastly, I calculated loan statistics, including total loan days, average loan days, and the percentage of books returned late. This project showcases my data analysis, Python programming, and data visualization skills, providing valuable insights into library usage patterns."
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
              ghLink="https://github.com/UltraInfinity"             
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
              title="Group Project - OKCupid Date-A-Scientist"
              description="Collaboration is an essential skill in the world of data science. In this group project, I worked with a team to leverage machine learning algorithms to analyze OKCupid data. This experience not only highlighted my ability to collaborate effectively but also reinforced my knowledge of machine learning and predictive modeling."
              ghLink="https://github.com/UltraInfinity"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="OkCupid Date-A-Scientist Machine Learning"
              description="This machine learning project showcases my capabilities in building, training, and testing predictive models. Using data from OKCupid, I applied machine learning techniques to make predictions and draw insights. This project reflects my proficiency in machine learning, a critical skill for data scientists."
              ghLink="https://github.com/UltraInfinity"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
