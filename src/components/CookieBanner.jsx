import React, { useState, useEffect } from 'react';

const CookieBanner = () => {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('analytics-consent');
    if (!consent) setShowBanner(true);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('analytics-consent', 'true');
    setShowBanner(false);
    window.gtag('consent', 'update', {
      'analytics_storage': 'granted'
    });
  };

  const handleDecline = () => {
    localStorage.setItem('analytics-consent', 'false');
    setShowBanner(false);
    window.gtag('consent', 'update', {
      'analytics_storage': 'denied'
    });
  };

  if (!showBanner) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      right: 0,
      background: '#f8f9fa',
      padding: '1rem',
      boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
      zIndex: 1000
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexWrap: 'wrap',
        gap: '1rem'
      }}>
        <p style={{ margin: 0 }}>
          Nous utilisons des cookies analytiques anonymes pour améliorer votre expérience.
          Aucune donnée personnelle n'est collectée.
        </p>
        <div style={{ display: 'flex', gap: '0.5rem' }}>
          <button
            onClick={handleAccept}
            style={{
              padding: '0.5rem 1rem',
              background: '#007bff',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Accepter
          </button>
          <button
            onClick={handleDecline}
            style={{
              padding: '0.5rem 1rem',
              background: '#6c757d',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer'
            }}
          >
            Refuser
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner; 