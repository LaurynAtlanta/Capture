import React from 'react';
import home1 from '../images/home1.png';
import {About, Description, Image, Hide} from '../styles';

//Framer Motion
import {motion} from 'framer-motion';

const AboutSection = () => {

    return (  
        <About>
            <Description>
                <motion.div>
                    <Hide>
                        <motion.h2 
                            // animate={{opacity:1, transition: {duration: 2}}} 
                            // initial={{opacity: 0}}
                            >We work to make</motion.h2>
                    </Hide>
                    <Hide>
                    <motion.h2 >your <span>dreams</span> come</motion.h2>
                    </Hide>
                    <Hide>
                    <motion.h2 >true.</motion.h2>
                    </Hide>
                </motion.div>
                <p>
                    Contact us for any photography or videography ideas that you have. 
                    We have professionals with the skills you desire.
                </p>
                <button>Contact us</button>
            </Description>
            <Image>
                <img src={home1} alt="Owner of Capture"/>
            </Image>
        </About>
    );
}


 
export default AboutSection;