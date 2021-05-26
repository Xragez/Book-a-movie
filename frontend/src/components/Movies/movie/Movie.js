import React, { useEffect, useState } from 'react';
import styles from './Movie.module.css';
import axios from "axios";
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY

function Movie(props){

    const [movie, setMovie] = useState([])

    const options = {
        method: 'GET',
        url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=${props.sortBy}&include_adult=false&include_video=false`
      };
    
        const fetchPoster = (id) => {
            axios.request(options).then(function (response) {
                setMovie(response.data)
                console.log(response.data);
            }).catch(function (error) {
                console.error(error);
            });
        }

    useEffect(() => {
    },[])

    return (
        <div className="d-flex flex-column align-items-center">
            <Link className={styles.link} to={`/movie/${props.id}`} >
                <div className={`card ${styles.movie}`}>
                    
                    <img src={`https://image.tmdb.org/t/p/original${props.posterUrl}`} className={`${styles.poster}`} />
                    
                </div>
            </Link>
            <div className={`d-flex flex-column align-items-center mt-1 ${styles.title}`}>
                <h5>{props.title}</h5>
                <div className="badge badge-warning">{props.rating}</div>
            </div>
        </div>
        
    );
}

export default Movie;