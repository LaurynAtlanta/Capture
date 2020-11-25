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
 
export default Nav;