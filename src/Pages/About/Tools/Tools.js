// import { useState, useEffect } from 'react';
// import { FaWindows, FaLinux, FaGithub } from 'react-icons/fa';
// import { SiVisualstudiocode, SiPhpmyadmin, SiArduino } from 'react-icons/si'; 
// import { Col } from 'react-bootstrap';
// import './Tools.css';

// function Tools() {
//   const [columns, setColumns] = useState(5);
//   const totalItems = 6;

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth <= 480) {
//         setColumns(2);
//       } else if (window.innerWidth <= 768) {
//         setColumns(3);
//       } else if (window.innerWidth <= 1024) {
//         setColumns(4);
//       } else {
//         setColumns(5);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const getResponsiveMargin = () => {
//     if (window.innerWidth <= 480) return "0 1em";
//     if (window.innerWidth <= 768) return "0 2em";
//     if (window.innerWidth <= 1024) return "0 4em";
//     return "0 7em";
//   };

//   const getResponsiveGap = () => {
//     if (window.innerWidth <= 768) return "1em";
//     return "2em";
//   };

//   return (
//     <div style={{
//         display: "grid",
//         gridTemplateColumns: `repeat(${columns}, 1fr)`,
//         margin: getResponsiveMargin(),
//         gap: getResponsiveGap(),
//         justifyContent: "center",
//         alignItems: "center",
//         textAlign: "center",
//         paddingBottom: "50px"
//       }}>
//       <Col xs={4} md={2} className="tech-icons" title='Windows'>
//         <FaWindows />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons" title='Linux'>
//         <FaLinux />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons" title='Visual Studio Code'>
//         <SiVisualstudiocode />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons" title='GitHub'>
//         <FaGithub />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons" title='php MyAdmin'>
//         <SiPhpmyadmin />
//       </Col>
//       <Col xs={4} md={2} className="tech-icons" title='Arduino'>
//         <SiArduino />
//       </Col>
//     </div>
//   );
// }

// export default Tools;




import './Tools.css';
import React, { useState, useEffect } from "react";
import { Col, Row } from "react-bootstrap";
import { FaWindows, FaLinux, FaGithub } from "react-icons/fa";
import { SiVisualstudiocode, SiPhpmyadmin, SiArduino } from "react-icons/si";

function Tools() {
  const [columns, setColumns] = useState(5);
  const totalItems = 6;

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

  const rows = Math.ceil(totalItems / columns);
  const lastRowItems = totalItems - (rows - 1) * columns;
  const offset = lastRowItems > 0 ? Math.floor((columns - lastRowItems) / 2) : 0;

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
      <Col xs={4} md={2} className="tech-icons" title='Windows'>
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
      {[...Array(offset)].map((_, index) => (
        <div key={`offset-${index}`} style={{ visibility: "hidden" }} />
      ))}
      <Col xs={4} md={2} className="tech-icons" title='Arduino'>
        <SiArduino />
      </Col>
      {[...Array(offset)].map((_, index) => (
        <div key={`offset-end-${index}`} style={{ visibility: "hidden" }} />
      ))}
    </Row>
  );
}

export default Tools;
