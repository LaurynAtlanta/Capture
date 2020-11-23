import React from 'react';
import home1 from '../images/home1.png'

const AboutSection = () => {
    return (  
        <div>
            <div className="description">
                <div className="title">
                    <div className="hide">
                        <h2>We work to make</h2>
                    </div>
                    <div className="hide">
                        <h2>your <span>dreams</span>come</h2>
                    </div>
                    <div className="hide">
                        <h2>true.</h2>
                    </div>
                </div>
                <p>
                    Contact us for any photography or videography ideas that you have. 
                    We have professionals with the skills you desire.
                </p>
                <button>Contact us</button>
            </div>
            <div className="image">
                <img src={home1} alt="Owner of Capture"/>
            </div>
        </div>
    );
}
 
export default AboutSection;