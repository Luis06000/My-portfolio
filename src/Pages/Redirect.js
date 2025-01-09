import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Redirect() {
    const location = useLocation();

    useEffect(() => {
        if (window.location.pathname !== location.pathname) {
            window.history.replaceState(null, '', location.pathname);
        }
    }, [location]);

    return null;
}

export default Redirect; 