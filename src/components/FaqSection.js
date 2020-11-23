import React from 'react';
import styled from 'styled-components';
import {About} from '../styles';

const FaqSection = () => {
    return (  
        <Faq>
            <h2>Any Questions <span>FAQ</span></h2>
            <div className="question">
                <h4>How Do I Start?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Daily Schedule?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>Different Payment Methods?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis.</p>
                </div>
                <div className="faq-line"></div>
            </div>
            <div className="question">
                <h4>What Products do you offer?</h4>
                <div className="answer">
                    <p>Lorem ipsum dolor sit amet.</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, quis.</p>
                </div>
                <div className="faq-line"></div>
            </div>
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