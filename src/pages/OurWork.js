import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import athlete from '../images/athlete-small.png';
import theracer from '../images/theracer-small.png';
import goodtimes from '../images/goodtimes-small.png';

const OurWork = () => {
    return (  
        <Work>
            <Movie>
                <h2>The Athlete</h2>
                <div className="line"></div>
                <Link to="">
                    <img src={athlete} alt="athlete"/>
                </Link>
            </Movie>
            <Movie>
                <h2>The Racer</h2>
                <div className="line"></div>
                <Link to="">
                    <img src={theracer} alt="racer"/>
                </Link>
            </Movie>
            <Movie>
                <h2>The Goodtimes</h2>
                <div className="line"></div>
                <Link to="">
                    <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </Movie>
        </Work>
    );
}
 
const Work = styled.div`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }

`

const Movie = styled.div `
    padding-bottom: 10rem;
    .line{
        height:0.5rem;
        background-color: #cccccc;
        margin-bottom : 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`



export default OurWork;