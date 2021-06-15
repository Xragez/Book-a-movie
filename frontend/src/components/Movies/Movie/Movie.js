import React, { useEffect, useState } from 'react';
import styles from './Movie.module.css';
import axios from "axios";
import { Link } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_API_KEY

function Movie(props){

    const [movie, setMovie] = useState([])

    return (
        <div className={`d-flex flex-column align-items-center ${styles.container}`}>
            <div className={`thumbnail ${styles.movie}`}>
                <Link className={styles.link} to={`/movie/${props.id}`} >
                    <img src={`https://image.tmdb.org/t/p/original${props.posterUrl}`} className={`${styles.poster}`} />
                </Link>
            </div>
            <div className={`align-items-center mt-1 ${styles.title}`}>
                <h5>{props.title}</h5>
                <div className="badge badge-warning">{props.rating}</div>
            </div>
        </div>
        
    );
}

export default Movie;