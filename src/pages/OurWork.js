import React from 'react';
import styled from 'styled-components'
import {Link} from 'react-router-dom';
import athlete from '../images/athlete-small.png';
import theracer from '../images/theracer-small.png';
import goodtimes from '../images/goodtimes-small.png';
import {motion} from 'framer-motion';
import {pageAnimation, fade, photoAnim, lineAnim, slider, sliderContainer} from '../animation';
import useScroll from '../components/useScroll';


const OurWork = () => {
    const [element, controls] = useScroll();
    const [element2, controls2] = useScroll();
    return (  
        <Work 
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'
        style={{backgroundColor: 'white'}}>
            <motion.div variants={sliderContainer}>
                <Frame1 variants={slider}/>
                <Frame2 variants={slider}/>
                <Frame3 variants={slider}/>
                <Frame4 variants={slider}/>
            </motion.div>
            <Movie>
                <motion.h2 variants={fade}>The Athlete</motion.h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-athlete">
                    <motion.img variants={photoAnim} src={athlete} alt="athlete"/>
                </Link>
            </Movie>
            <Movie variants={fade} animate={controls} initial='hidden' ref={element}>
                <h2>The Racer</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/the-racer">
                    <img src={theracer} alt="racer"/>
                </Link>
            </Movie>
            <Movie variants={fade} animate={controls2} initial='hidden' ref={element2}>
                <h2>Goodtimes</h2>
                <motion.div variants={lineAnim} className="line"></motion.div>
                <Link to="/work/good-times">
                        <img src={goodtimes} alt="goodtimes"/>
                </Link>
            </Movie>
        </Work>
    );
}
 
const Work = styled(motion.div)`
    min-height: 100vh;
    overflow: hidden;
    padding: 5rem 10rem;
    h2{
        padding: 1rem 0rem;
    }

`

const Movie = styled(motion.div) `
    padding-bottom: 10rem;
    .line{
        height:0.5rem;
        background-color: #23d997;
        margin-bottom : 3rem;
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`

const Frame1 = styled(motion.div)`
    position: fixed;
    left: 0;
    top: 10%;
    width: 100%;
    height: 100vh;
    background-color: #fffebf;
    z-index: 2;

`

const Frame2 = styled(Frame1)`
    background-color: #ff8efb;
`
const Frame3 = styled(Frame1)`
    background-color: #8ed2ff;
`
const Frame4 = styled(Frame1)`
    background-color: #8effa0;
`



export default OurWork;