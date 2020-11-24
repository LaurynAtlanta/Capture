import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';
import Toggle from './toggle';
import {AnimateSharedLayout} from 'framer-motion';

const FaqSection = () => {
    return (  
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <AnimateSharedLayout>
            <Toggle title="How Do I Start?">
                    <div className="answer">
                        <p>Lorem ipsum dolor sit amet.</p>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis.</p>
                    </div>
            </Toggle>
            <Toggle title="Daily Schedule?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis.</p>
                </div>
            </Toggle>
            <Toggle title="Different Payment Methods?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis.</p>
                </div>
            </Toggle>
            <Toggle title="What Products do you offer?">
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis.</p>
                </div>
            </Toggle>
            </AnimateSharedLayout>
        </Faq>
    );
}

const Faq = styled(About)`
    display: block;
    span{
        display: block;
    }
    h2{
        padding-bottom: 2.5rem;
        font-weight: lighter;
    }
    h4{
        cursor: pointer;
    }
    .faq-line{
        background: #cccccc;
        height: 0.2rem;
        margin: 2rem 0rem;
        width: 100%;
    }
    .answer{
        padding: 2rem 0rem 2.2rem;
        p{
            padding: 0.5rem 0rem;
        }
    }
`

export default FaqSection;