import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function Redirect() {
    const location = useLocation();

    useEffect(() => {
        window.history.replaceState(null, '', location.pathname);
    }, [location]);

    return null;
}

export default Redirect; 