import './App-header.css';
import { useNavigate, Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function AppHeader() {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        document.body.style.overflow = !isMenuOpen ? 'hidden' : 'auto';
    };

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, []);

    const handleNavigation = (path) => {
        navigate(path);
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    return (
        <div className={`App-header ${isScrolled ? 'scrolled' : ''}`}>
            <button 
                className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                <Link className="button" to="/" onClick={() => handleNavigation('/')}>
                    <span className="actual-text">&nbsp;home&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;home&nbsp;</span>
                </Link>
                <Link className="button" to="/projects" onClick={() => handleNavigation('/projects')}>
                    <span className="actual-text">&nbsp;projects&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;projects&nbsp;</span>
                </Link>
                <Link className="button" to="/about" onClick={() => handleNavigation('/about')}>
                    <span className="actual-text">&nbsp;about&nbsp;</span>
                    <span aria-hidden="true" className="hover-text">&nbsp;about&nbsp;</span>
                </Link>
            </div>
        </div>
    );
}

export default AppHeader;