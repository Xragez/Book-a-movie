import React, { useEffect, useState } from 'react';
import styles from './Seats.module.css';
import axios from "axios";
import { Link } from 'react-router-dom';
import Seat from './Seat/Seat';

const API_KEY = process.env.REACT_APP_API_KEY

function Seats(props){

  const [availableSeats, setAvailableSeats] = useState([
    ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9"], 
    ["B1", "B3", "B4", "B5", "B6", "B7", "B8", "B9"],
    ["C1", "C2", "C3", "C4", "C5", "C8", "C9"],
    ["D1", "D2", "D3", "D4", "D5", "D7", "D8", "D9"]
  ])

  const [seats, setSeats] = useState([
    ["A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10"], 
    ["B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10"],
    ["C1", "C2", "C3", "C4", "C5", "C6", "C7", "C8", "C9", "C10"],
    ["D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10"]
  ])

  const isSeatAvailable = (seatId) => {
    for(const row of availableSeats){
      if(row.indexOf(seatId) > -1){
        return true
      }
    }
    return false
  }

  return (
    <div className="mt-5">
      {
      seats.map( row => 
        <div className="d-flex flex-row m-2">
          {row.map(seat =>
            <div className="mr-2">
              {isSeatAvailable(seat) ?
              <Seat id ={seat} state="available"></Seat>
              :
              <Seat id ={seat} state="unavailable"></Seat>}
            </div>
          )}
        </div>
      )
      }
    </div>  
  );
}

export default Seats;