import React from 'react';
import styled from 'styled-components';
import {Link, useLocation} from 'react-router-dom';
import {motion} from 'framer-motion';

const Nav = () => {
    const {pathname} = useLocation();
    return (  
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                    <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/' ? '50%': '0%'}}/>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                    <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/work' ? '50%': '0%'}}/>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
                    <Line transition={{duration: 0.75}} initial={{width: '0%'}} animate={{width: pathname === '/contact' ? '50%': '0%'}}/>
                </li>
            </ul>
        </StyledNav>
    );
}

const StyledNav= styled.nav`
    min-height: 10vh;
    display: flex;
    margin: auto;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
    background-color: #282828;
    position: sticky;
    top: 0;
    z-index: 10;
    ul{
        list-style: none;
        display: flex;
    }
    li{
        padding-left: 5rem;
        position: relative;
    }
    a{
        color: white;
        text-decoration: none;
        font-size: 0.85rem;
        @media (max-width: 1327px){
        font-size: 1.25rem;
    }
    }
    #logo{
        font-size: 1.8rem;
        font-family: 'Oleo Script', cursive;
        font-weight: lighter;
        @media (max-width: 1200px){
        font-size: 2.2rem;
    }
    }
    @media (max-width: 955px){
        flex-direction: column;
        padding: 2rem 0rem;
        #logo{
            display: inline-block;
            margin-bottom: 1rem;
            font-size: 2.3rem;
        }
        ul{
            padding:1.2rem;
            justify-content: space-around;
            width: 100%;
        }
        li{
            padding: 0;
        }
    }
`
const Line = styled(motion.div)`
    height: 0.3rem;
    background-color: #23d997;
    width: 0%;
    position: absolute;
    bottom: -60%;
    left: 47%;
    @media (max-width: 955px){
        left: 0%;
    }
`
 
export default Nav;