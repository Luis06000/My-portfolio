import './Tools.css';
import React from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaLinux, FaGithub } from "react-icons/fa";
import { SiVisualstudiocode, SiPhpmyadmin } from "react-icons/si";

function Tools() {
  return (
    <Row style={{
        display: "grid",
        gridTemplateColumns: "repeat(5, 1fr)",
        marginLeft: "10em",
        marginRight: "10em",
        gap: "2em",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "50px"
      }}>
      <Col xs={4} md={2} className="tech-icons" title='Windoxs'>
        <FaWindows />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title='Linux'>
        <FaLinux />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title='Visual Studio Code'>
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title='GitHub'>
        <FaGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title='php MyAdmin'>
        <SiPhpmyadmin />
      </Col>
    </Row>
  );
}

export default Tools;