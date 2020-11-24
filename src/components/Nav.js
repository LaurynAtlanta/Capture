import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Nav = () => {
    return (  
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li>
                    <Link to="/">1. About Us</Link>
                </li>
                <li>
                    <Link to="/work">2. Our Work</Link>
                </li>
                <li>
                    <Link to="/contact">3. Contact Us</Link>
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
    }
    #logo{
        font-size: 1.6rem;
        font-family: 'Oleo Script', cursive;
        font-weight: lighter;
    }
`
 
export default Nav;