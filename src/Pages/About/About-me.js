import './About-me.css';
import { FaArrowsTurnRight } from "react-icons/fa6";

function AboutMe() {
    return (
        <div className='about-me'>
            <div className="about-container">
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <div>
                        I am Luis Fernandes, I live in Nice, France.
                    </div>
                    <div>
                        I am currently studying at{' '}
                        <a href="https://www.cesi.fr" target='_blank' rel="noopener noreferrer" style={{ color: '#13c16a' }}>
                            <span>CESI</span>
                        </a>, to become a computer engineer.
                    </div>
                    <div>
                        I also created, in collaboration with friends, the{' '}
                        <a href="https://luis06000.github.io/Fight-team/" target='_blank' rel="noopener noreferrer" style={{ color: '#13c16a' }}>
                            <span>CESI Fight-Team</span>
                        </a> association.
                    </div>
                </div>
                <br/><br/>
                Apart from my studies, I also spend time on activities such as :<br/>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em', marginLeft: '3em', marginTop: '1em', marginBottom:'2.5em' }}>
                    <div><FaArrowsTurnRight /> Code different projects</div>
                    <div><FaArrowsTurnRight /> Take motorcycle rides</div>
                    <div><FaArrowsTurnRight /> Play video games</div>
                    <div><FaArrowsTurnRight /> Do sports</div>
                    <div><FaArrowsTurnRight /> Spend time with my friends</div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;