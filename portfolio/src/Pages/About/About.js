import './About.css';
import Skills from './Skills/Skills';
import Tools from './Tools/Tools';

function About() {
    return (
        <div className="about">
          <div className='title'>
            <h1>Learn a bit more about me</h1>
            🙋🏻‍♂️
          </div>
          <div className='about-me'>
            <span style={{ position:'relative', zIndex:'10', color:'#13c16a' }}>
              I am Luis Fernandes, 2nd year computer science student at CESI Nice.<br/>
            </span>
          </div>
          <h1 style={{ position: "relative", zIndex:"10", textAlign: "center" }}>My skills</h1>
          <Skills />
          <h1 style={{ position: "relative", zIndex:"10", textAlign: "center" }}>My tools</h1>
          <Tools />
          <div className="CV">
            <a href="https://cvdesignr.com/p/66fa96312ba61" target='_blank' rel="noopener noreferrer" className="CV-btn">
              <span>Download CV</span>
            </a>
          </div>
        </div>
    );
} 

export default About;