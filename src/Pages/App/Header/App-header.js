import './App-header.css';
import { useNavigate } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

function AppHeader() {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`App-header ${isScrolled ? 'scrolled' : ''}`}>
          <button className="button" data-text="Awesome" onClick={() => navigate('/')}>
            <span className="actual-text">&nbsp;home&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;home&nbsp;</span>
          </button>
          <button className="button" data-text="Awesome" onClick={() => navigate('/projects')}>
            <span className="actual-text">&nbsp;projects&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;projects&nbsp;</span>
          </button>
          <button className="button" data-text="Awesome" onClick={() => navigate('/about')}>
            <span className="actual-text">&nbsp;about&nbsp;</span>
            <span aria-hidden="true" className="hover-text">&nbsp;about&nbsp;</span>
          </button>
        </div>
    );
}

export default AppHeader;