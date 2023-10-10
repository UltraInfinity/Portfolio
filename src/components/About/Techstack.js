import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiPython, DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { SiR } from "react-icons/si";
import { Icon } from '@iconify/react';
import matlabIcon from '@iconify/icons-file-icons/matlab';

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiR />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={matlabIcon} width="100" />
      </Col>
    </Row>
  );
}

export default Techstack;
