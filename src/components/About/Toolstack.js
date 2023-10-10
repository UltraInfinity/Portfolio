import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiWindows,
  SiXampp,
  SiVisualstudiocode,
} from "react-icons/si";
import { Icon } from '@iconify/react';
import googlecolabIcon from '@iconify/icons-simple-icons/googlecolab';
import anacondaIcon from '@iconify/icons-simple-icons/anaconda';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={googlecolabIcon} width="75" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={anacondaIcon} width="75" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiXampp />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
    </Row>
  );
}

export default Toolstack;
