import React, { useEffect, useState } from 'react';
import styles from './Movies.module.css';
import Movie from './Movie/Movie';
import axios from "axios";
import Carousel, { slidesToShowPlugin  } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const API_KEY = process.env.REACT_APP_API_KEY

function Movies(props) {

  const [movies, setMovies] = useState([])

  const optionsMovies = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}` +
      `&language=en-US&sort_by=${props.sortBy}&include_adult=false&include_video=false` + 
      `${props.vote_count ? `&vote_count.gte=${props.vote_count}` : ''}`
  };
  
  const fetchMovies = async () => {   
    axios.request(optionsMovies).then(function (response) {
      setMovies(response.data.results);
      console.log(response.data.results);
    }).catch(function (error) {
      console.error(error);
    });
  }
  
  useEffect(() => {
    fetchMovies()
  }, [])


  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5
  };

  return (
    <div className="m-3">
      <h3 className={styles.title}>{props.title}</h3>
      <Carousel
        plugins={[
          'infinite',
          'arrows',
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 5
            }
          },
        ]}
        draggable="true"
        breakpoints={{
          1200: {
            plugins: [
              'infinite',
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 4
                }
              },
            ]
          },
          950: {
            plugins: [
              'infinite',
              'arrows',
              {
                resolve: slidesToShowPlugin,
                options: {
                numberOfSlides: 3
                }
              },
            ]
          },
          700: {
              plugins: [
              'infinite',
              'arrows',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                  numberOfSlides: 2
                  }
                },
              ]
          },
          450: {
              plugins: [
              'infinite',
              'arrows',
                {
                  resolve: slidesToShowPlugin,
                  options: {
                  numberOfSlides: 1
                  }
                },
              ]
            }
        }}
      >
        {movies.map(movie =>
          <Movie 
            title={movie.title}  
            rating={movie.vote_average} 
            posterUrl={movie.poster_path} 
            id={movie.id} 
            key={movie.id}
          />
        )}
      </Carousel>
    </div>
  )
}

export default Movies;