import React from 'react';
import clock from '../images/clock.svg';
import diaphragm from '../images/diaphragm.svg';
import money from '../images/money.svg';
import teamwork from '../images/teamwork.svg';
import home2 from '../images/home2.png';
import styled from 'styled-components';
import {About, Description, Image} from '../styles';
import useScroll from './useScroll';
import {fade} from '../animation';

const ServicesSection = () => {
    const [element, controls] = useScroll();
    return (  
        <Services variants={fade} animate={controls} initial='hidden' ref={element}>
            <Description>
                <h2>High <span>quality</span> services</h2>
                <Cards>
                    <Card>
                        <div className="icon">
                            <img src={clock} alt="clock"/>
                            <h3>Efficient</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={diaphragm} alt="diaphragm"/>
                            <h3>Diaphragm</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={money} alt="money"/>
                            <h3>Affordable</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                    <Card>
                        <div className="icon">
                            <img src={teamwork} alt="teamwork"/>
                            <h3>Teamwork</h3>
                        </div>
                        <p>Lorem ipsum dolor sit amet.</p>
                    </Card>
                </Cards>
            </Description>
            <Image>
                <img src={home2} alt="Camera"/>
            </Image>
        </Services>
    )
}

const Services = styled(About)`
    h2{
        padding-bottom: 5rem;
    }
    p{
        width: 70%;
        padding: 2rem 0rem 4rem 0rem;
    }

`

const Cards = styled.div`
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 955px){
        justify-content: center;
    }
`

const Card = styled.div `
    flex-basis: 15rem;
    .icon{
        display: flex;
        align-items: center;

        h3{
            margin-left: 1rem;
            background-color: white;
            color: black;
            padding: 0.3rem;
        }
    }
`

export default ServicesSection;