import './Home.css';
import { FaBell } from "react-icons/fa";

function Home() {
    return (
        <div className='home'>
            <div className='title'>
                <h1>Welcome to my portfolio</h1>
                ✌️
            </div>
            <div className='intro-text'>
                <div className="bell-icon">
                    <FaBell />
                </div>
                <div className="separator"></div>
                <p>Hello, I am a passionate developer currently looking for an internship in IT from April 7th, 2025 to July 21st, 2025. I love creating innovative solutions and am excited about new opportunities.</p>
            </div>

            <div className="cube-loader">
              <div className="cube-top"></div>
              <div className="cube-wrapper">
                <span style={{ '--i': 0 }} className="cube-span"></span>
                <span style={{ '--i': 1 }} className="cube-span"></span>
                <span style={{ '--i': 2 }} className="cube-span"></span>
                <span style={{ '--i': 3 }} className="cube-span"></span>
              </div>
            </div>
        </div>
    );
}

export default Home;