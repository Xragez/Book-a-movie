import React from 'react';
import styles from './Movies.module.css';
import Movie from './Movie/Movie';

function Movies() {
    return (
        <div className={`${styles.container} ml-4 mt-4`}>
            <h3 className={styles.title}>Now Playing:</h3>
            <div className="row">
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
                <Movie/>
            </div>
        </div>
    )
}

export default Movies;