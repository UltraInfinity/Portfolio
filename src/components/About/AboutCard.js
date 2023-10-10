import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi there, I'm <span className="purple">Ahmed Najaf</span>, currently based in <span className="purple">Your City, Your Country</span>.
            <br />
            I'm a passionate student on a journey to master the art of data science and machine learning. Currently, I'm pursuing my MSc in Computer Science with a focus on Artificial Intelligence.
            <br />
            <br />
            In addition to my studies, I'm eagerly exploring the fascinating world of Python, data analysis, and machine learning. My goal is to harness the power of data to make a positive impact in the field of Natural Language Processing (NLP).
            <br />
            <br />
            When I'm not diving into data, you'll find me nurturing my love for languages and linguistics. I'm fascinated by how data science and NLP can reshape multilingual learning and teaching.
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Language Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Aspiring Data Scientist
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Every data point tells a story; I'm here to decode it."{" "}
          </p>
          <footer className="blockquote-footer">Ahmed Najaf</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
