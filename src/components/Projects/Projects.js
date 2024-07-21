import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from '../Projects/ProjectCards';
import Particle from "../Particle";
import trvms from "../../Assets/Projects/trvms.jpg";
import email from "../../Assets/Projects/Email-Validation.jpeg";
import jobz from "../../Assets/Projects/jobzapp.jpg";
import chatify from "../../Assets/Projects/chat.png.jpg";
import calculator from "../../Assets/Projects/calculator.jpg";
import tictactoe from "../../Assets/Projects/tictactoe.jpg"
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
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js,mongoDB, express js, node js. Have features which allows user for realtime messaging with friends , families and many more."
              ghLink="https://github.com/Srijitaz/chat-app"
              demoLink="https://chat-app-1-0gro.onrender.com"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobz}
              isBlog={false}
              title="JObZee- Job Seeking application"
              description="The Job Finder Application is a full stack web application built using mern stack (MongoDB, Express.js, React, Node Js). This application is designed in such a way that it helps users search for job listings , apply for jobs and manage their job applications in one centralized platform."
              ghLink="https://github.com/Srijitaz/JOB-FINDING-MERN-APPLICATION"
              demoLink="https://job-seeking-web-application-sri.netlify.app"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trvms}
              isBlog={false}
              title="TRVMS"
              description="The Traffic Rule Violation Management System is a comprehensive solution designed to streamline the management and enforcement of traffic regulations. This system aims to improve road safety and ensure compliance with traffic laws by efficiently recording, processing, and managing traffic violations. It provides a user-friendly interface for law enforcement officers, administrators, and citizens, enabling transparent and efficient handling of traffic rule violations. Built using cutting edge technologies"
              ghLink="https://github.com/Srijitaz/trvms"
              demoLink="https://master--heroic-quokka-5beadc.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculify- a simple calculator"
              description="This is a simple calculator built using html, css and js"
              ghLink="https://github.com/Srijitaz/Calculator"
              demoLink="https://srijitaz.github.io/Calculator/" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={email}
              isBlog={false}
              title="Email Validation"
              description="This is a simple emailvalidation page built to verify if the email is valid or not"
              ghLink="https://github.com/Srijitaz/EMAIL_VALIDATION"
              demoLink="https://email-validation-gray.vercel.app/"    
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="Tic Tac Toe"
              description="A simple tic-tac-toe game built susing html, css and js"
              ghLink="https://github.com/Srijitaz/tic-tac-toe"
              demoLink="https://tic-tac-toe-blue-kappa.vercel.app/"    
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
