import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import {pageAnimation, titleAnim} from '../animation';

const ContactUs = () => {
    return (  
        <ContactStyle
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'
        style={{background: '#fff' }}>
            <Title>
                <Hide>
                    <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
                </Hide>
            </Title>
            <div>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                        <h2>Send us a message</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                        <h2>Send an email</h2>
                    </Social>
                </Hide>
                <Hide>
                    <Social variants={titleAnim}>
                        <Circle/>
                        <h2>Set up a meeting</h2>
                    </Social>
                </Hide>
            </div>
        </ContactStyle>
    );
}

const ContactStyle= styled(motion.div)`
    padding: 5rem 10rem;
    color: #353535;
    min-height: 90vh;
    @media (max-width: 955px){
        padding: 3rem;
        font-size: 1rem;
    }
`

const Title = styled.div`
    margin-bottom: 4rem;
    color: black;
    @media (max-width: 955px){
        margin-top: 3rem;
    }
`

const Hide = styled.div`
    overflow: hidden;
`
const Circle = styled.div`
    border-radius: 50%;
    width: 1.5rem;
    height: 1.5rem;
    background-color: #353535;
`

const Social = styled(motion.div)` 
    display: flex;
    align-items: center;
    h2{
        font-size: 2rem;
        margin: 1rem;
    }
`
 
export default ContactUs;