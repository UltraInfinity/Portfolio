import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Body style={{ display: "flex", flexDirection: "column" }}>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify", flex: 1 }}>
          {props.description}
        </Card.Text>

        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}
        <div style={{ marginTop: "auto" }}>
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginBottom: "10px" }}
            >
              <CgWebsite /> &nbsp; Demo
            </Button>
          )}

          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp; {props.isBlog ? "Blog" : "GitHub"}
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
