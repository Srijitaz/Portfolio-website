import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Fellow buddies, I am <span className="purple">Srijita Saha </span>
            from <span className="purple"> Kolkata, India.</span>
            <br />
            I am currently a unemployed software developer.
            <br />
            I am studying B.Tech in Computer Science and Engineering, currently in 4th year of my college, BPPIMT
            North 24 parganas.
            <br />
            <br />
            Apart from coding, some other activities that i am engaged to!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing content stuffs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(125 120 170)" }}>
            "Building things that sometimes i don't understand!"{" "}
          </p>
          <footer className="blockquote-footer">Srijita</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
