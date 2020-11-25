import styled from 'styled-components';
import {motion} from 'framer-motion'

export const About = styled(motion.div)`
    min-height: 90vh;
    display:flex;
    align-items:center;
    justify-content: space-between;
    padding: 2rem 10rem;
    color: white;
    @media (max-width: 955px){
        display: block;
        padding: 2rem 2rem;
        text-align: center;
    }
`
export const Description = styled.div`
    flex: 1;
    padding-right:3rem;
    h2{
        font-weight: lighter;
    }
    @media (max-width: 955px){
        padding: 0;
        p{
            font-size: 1.2rem;
            padding: 1rem;
        }
        button{
            margin: 1rem 0rem 3rem;
        }
    }
`

export const Image = styled.div`
    flex: 1;
    overflow:hidden;
    img{
        width: 100%;
        height: 80vh;
        object-fit:cover;
    }
`

export const Hide = styled.div`
    overflow: hidden;
`