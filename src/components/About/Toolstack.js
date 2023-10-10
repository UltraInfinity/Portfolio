import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
} from "react-icons/si";
import { Icon } from '@iconify/react';
import googlecolabIcon from '@iconify/icons-simple-icons/googlecolab';
import anacondaIcon from '@iconify/icons-simple-icons/anaconda';
import notionIcon from '@iconify/icons-simple-icons/notion';

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiMacos />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostman />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSlack />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={googlecolabIcon} width="75" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={anacondaIcon} width="75" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <Icon icon={notionIcon} width="75" />
      </Col>
    </Row>
  );
}

export default Toolstack;
