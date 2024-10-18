import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiDatabase } from "react-icons/di";
import { SiC, SiMysql } from "react-icons/si";

function Skills() {
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
      <Col xs={4} md={2} className="tech-icons" title="HTML 5">
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="CSS 3">
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="C">
        <SiC />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="JavaScript">
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Python">
        <DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="React">
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Node.js">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="MySQL">
        <SiMysql />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Database">
        <DiDatabase />
      </Col>
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Skills;