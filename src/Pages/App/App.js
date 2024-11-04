// import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
// import './App.css';
// import AppHeader from './Header/App-header.js';
// import AppFooter from './Footer/App-footer.js';
// import Home from '../Home/Home.js';
// import Projects from '../Projects/Projects.js';
// import About from '../About/About.js';
// import Background from '../../Background/Background.js';
// import Preloader from '../Loader/Preloader.js';

// function ScrollToTop() {
//   const { pathname } = useLocation();

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// }

// function App() {
//   const [load, upadateLoad] = useState(true);

//   useEffect(() => {
//     const timer = setTimeout(() => {
//       upadateLoad(false);
//     }, 1200);

//     return () => clearTimeout(timer);
//   }, []);

//   return (
//     <Router>
//       <Preloader load={load} />
//       <div className="App" id={load ? "no-scroll" : "scroll"}>
//         <Background />
//         <AppHeader />
//         <ScrollToTop />
//         <Routes>
//           <Route path="/Home" element={<Home />} />
//           <Route path="/projects" element={<Projects />} />
//           <Route path="/about" element={<About />} />
//         </Routes>
//         <AppFooter />
//       </div>
//     </Router>
//   );
// }

// export default App;





import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import './App.css';
import AppHeader from './Header/App-header.js';
import AppFooter from './Footer/App-footer.js';
import Home from '../Home/Home.js';
import Projects from '../Projects/Projects.js';
import About from '../About/About.js';
import Background from '../../Background/Background.js';
import Preloader from '../Loader/Preloader.js';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Background />
        <AppHeader />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <AppFooter />
      </div>
    </Router>
  );
}

export default App;
