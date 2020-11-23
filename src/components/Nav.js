import React from 'react';
import styled from 'styled-components';

const Nav = () => {
    return (  
        <StyledNav>
            <h1><a id="logo" href="/">Capture</a></h1>
            <ul>
                <li>
                    <a href="/">1. About Us</a>
                </li>
                <li>
                    <a href="/">2. Out Work</a>
                </li>
                <li>
                    <a href="/">3. Contact Us</a>
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