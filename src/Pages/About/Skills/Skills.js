import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { DiHtml5, DiCss3, DiJavascript1, DiReact, DiNodejs, DiPython, DiGit, DiDatabase } from "react-icons/di";
import { SiC, SiCplusplus, SiMysql } from "react-icons/si";

function Skills() {
  const [columns, setColumns] = useState(5);
  const totalItems = 11;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 480) {
        setColumns(2);
      } else if (window.innerWidth <= 768) {
        setColumns(3);
      } else if (window.innerWidth <= 1024) {
        setColumns(4);
      } else {
        setColumns(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const lastRowItems = totalItems % columns;
  const offset = Math.floor((columns - lastRowItems) / 2);

  const getResponsiveMargin = () => {
    if (window.innerWidth <= 480) return "0 1em";
    if (window.innerWidth <= 768) return "0 2em";
    if (window.innerWidth <= 1024) return "0 4em";
    return "0 7em";
  };

  const getResponsiveGap = () => {
    if (window.innerWidth <= 768) return "1em";
    return "2em";
  };

  return (
    <Row style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        margin: getResponsiveMargin(),
        gap: getResponsiveGap(),
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
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
      <Col xs={4} md={2} className="tech-icons" title="C++">
        <SiCplusplus />
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
      {[...Array(offset)].map((_, index) => (
        <div key={`offset-${index}`} style={{ visibility: "hidden" }} />
      ))}
      <Col xs={4} md={2} className="tech-icons" title="Git">
        <DiGit />
      </Col>
    </Row>
  );
}

export default Skills;