import React, { useEffect, useState } from 'react';
import styles from './MovieCard.module.css';


export default function MovieCard (props){

  const [movie, setMovie] = useState([])
  const [genres, setGenres] = useState([])

  useEffect(() => {
    setMovie(props.movie)
    setGenres(props.genres)
  })

  return (
    <div className={`d-flex flex-row card m-3 p-3 ${styles.card}`}>
      <div className="flex-column">
          <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className={styles.poster}/>
      </div>
      <div className="m-4">
          <h2>{movie.title}</h2>
        <p>
          {movie.runtime} min  
        </p>
        <p>
          {genres.map( genre =>
            <span>{genre.name + " "}</span>
            )}
        </p>
        <p>
          {movie.overview}
        </p>
        <p>
          Release date: {movie.release_date}
        </p>
        <p>
          Rating: {movie.vote_average}/10 {movie.vote_count} votes
        </p>
      </div>
    </div>
  ); 
}
