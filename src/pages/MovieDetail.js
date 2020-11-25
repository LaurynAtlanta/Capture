import React,{useState, useEffect} from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {MovieState} from '../MovieState';
import { motion } from 'framer-motion';
import {pageAnimation} from '../animation';
import ScrollTop from '../components/ScrollTop';
 

const MovieDetail = () => {
    const history= useHistory();
    const url = history.location.pathname;
    const [movies, setMovies] = useState(MovieState);
    const [movie, setMovie] = useState(null);

    useEffect(()=>{ //goes through movies, looks at our url that we are on and compares the url we are on to the movies urls. Sets the movie to whatever url matches.
        const currentMovie = movies.filter((stateMovie)=> stateMovie.url === url);
        setMovie(currentMovie[0]); //this gets its out from the array that filter creates so we can access object
    }, [movies, url]);

    return (  
        <motion.div
        variants={pageAnimation}
        initial='hidden'
        animate='show'
        exit='exit'>
        {movie && (
            <Details>
                <Headline>
                    <h2>{movie.title}</h2>
                    <img src={movie.mainImg} alt={movie.title}/>
                </Headline>
                <Awards>
                    {movie.awards.map((award)=>(
                        <Award title={award.title} description={award.description} key={award.title}/>
                    ))}
                </Awards>
                <ImageDisplay>
                    <img src={movie.secondaryImg} alt={movie.title}/>
                </ImageDisplay>
            </Details>
            )}
            <ScrollTop/>
        </motion.div>
    );
}

const Details = styled.div`
    color: white;
`
const Headline = styled.div`
    min-height: 90vh;
    padding-top: 20vh;
    position: relative;
    h2{
        position: absolute;
        top:10%;
        left: 50%;
        transform: translate(-50%, -10%);
    }
    img{
        width: 100%;
        height: 70vh;
        object-fit: cover;
    }
`
const Awards = styled.div`
    min-height: 30vh;
    display: flex;
    margin: 5rem 10rem;
    align-items:center;
    justify-content: space-around;

    @media (max-width: 950px){
        display: block;
        margin: 2rem;
    }
`

const StyledAward = styled.div` //gets put in award component below
    padding: 3rem;
    h3{
        font-size: 1.7rem;
    }
    .line{
        height: 0.5rem;
        background-color: #23d997;
        width: 50%;
        margin: 1rem 0rem;
    }
    p{
        padding: 1.5rem 0rem;
    }
`

const ImageDisplay = styled.div`
    min-height: 50vh;
    img{
        width: 100%;
        height: 100vh;
        object-fit: cover;
        @media (max-width: 950px){
            height: 50vh;
        }
    }

`

////////////////////////////////////////
//AWARD COMPONENT
////////////////////////////////////////
const Award = (props) => { 
    return (
        <StyledAward>
            <h3>{props.title}</h3>
            <div className="line"></div>
            <p>{props.description}</p>
        </StyledAward>
    )
}
 
export default MovieDetail;