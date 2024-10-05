import './Home.css';

function Home() {
    return (
        <div className='home'>
            <div className='title'>
                <h1>Welcome to my portfolio</h1>
                ✌️
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