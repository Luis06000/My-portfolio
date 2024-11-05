import './About.css';
import Skills from './Skills/Skills';
import Tools from './Tools/Tools';
import AboutMe from './About-me';

function About() {
    return (
        <div className="about">
        <div className='title-container'>
            <div className='title'>
                <h1>About Me</h1>
                <span className="emoji">👨‍💻</span>
            </div>
        </div>
          <AboutMe />
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