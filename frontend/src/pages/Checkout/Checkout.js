import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Header from '../../components/Header/Header';
import styles from './Checkout.module.css'
import axios from "axios";
import Seats from '../../components/Seats/Seats';


const API_KEY = process.env.REACT_APP_API_KEY

export default function Checkout (){
  const {movieid, showtimeid} = useParams()
  const [movie, setMovie] = useState([])


  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieid}?api_key=${API_KEY}&language=en-US`
  };

  const fetchMovie = async () => {   
      axios.request(options).then(function (response) {
          setMovie(response.data);
      }).catch(function (error) {
          console.error(error);
      });
  }

  useEffect(() => {
    fetchMovie()
  }, [])

  return (
    <div>
      <Header/>
      <div className="d-flex flex-column align-items-center justify-content-center">
        <div className="align-items-left">
          <div className="d-flex flex-column">
            <h5><p>{movie.title}</p></h5>
            <span>Day</span>
            <span>05.06.2021</span>
            <p>19:30</p>
          </div>
          <div className={`${styles.screen}`}>SCREEN</div>
        </div>
        <div>
          <Seats></Seats>
        </div>
      </div>
    </div>
  ); 
}
