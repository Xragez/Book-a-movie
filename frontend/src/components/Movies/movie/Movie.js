import React from 'react';
import styles from './Movie.module.css';
import poster from '../../../assets/images/joker_full.jpg'

function Movie(){
    return (
        <div className="d-flex flex-column align-items-center">
            <div className={`card ${styles.movie}`}>
                <img src={poster} className={`${styles.poster}`} />
                
            </div>
            <div className="d-flex flex-column align-items-center mt-1">
                <h4>Title</h4>
                <div className="badge badge-warning">8.3</div>
            </div>
            
        </div>
        
    );
}

export default Movie;