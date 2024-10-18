import { FaArrowsTurnRight } from "react-icons/fa6";

function AboutMe() {
    return (
        <div className='about-me'>
            <div style={{ position: 'relative', zIndex: '10', marginLeft: '7em', color: '#a8f7d0', fontSize: '18px' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1em' }}>
                    <div>
                        I am Luis Fernandes, I live in{' '}
                        <a href="https://wtolx.com/hLPmf" target='_blank' rel="noopener noreferrer" style={{ color: '#13c16a' }}>
                            <span>Nice, France</span>
                        </a>.
                    </div>
                    <div>
                        I am currently studying at{' '}
                        <a href="https://www.cesi.fr" target='_blank' rel="noopener noreferrer" style={{ color: '#13c16a' }}>
                            <span>CESI</span>
                        </a>, to become a computer engineer.
                    </div>
                    <div>
                        I also created, in collaboration with friends, the{' '}
                        <a href="https://www.cesi.fr" target='_blank' rel="noopener noreferrer" style={{ color: '#13c16a' }}>
                            <span>CESI Fight-Team</span>
                        </a> association.
                    </div>
                </div>
                <br/><br/>
                Apart from my studies, I also spend time on activities such as :<br/>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5em', marginLeft: '3em', marginTop: '1em', marginBottom:'2.5em' }}>
                    <div><FaArrowsTurnRight /> code different projects</div>
                    <div><FaArrowsTurnRight /> take motorcycle rides</div>
                    <div><FaArrowsTurnRight /> play video games</div>
                    <div><FaArrowsTurnRight /> do sports</div>
                    <div><FaArrowsTurnRight /> spend time with my friends</div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;