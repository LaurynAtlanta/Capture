import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';

const ScrollTop = () => {
    const {pathname} = useLocation();
    useEffect(()=>{ //we want the window to scroll to top of screen when there is a new location in url
        window.scroll({
            top: 0,
            left: 0
        })
    }, [pathname])
    return null;
}
 
export default ScrollTop;