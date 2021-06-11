import React, { useEffect, useState } from 'react';
import styles from './Tickets.module.css';
import axios from "../../axios";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router-dom';

export default function Tickets (props){

  const [date, setDate] = useState(new Date())
  const [auth, setAuth] = useAuth()
  const [showTimes, setShowTimes] = useState([])


  const fetchShowTimes = async () => {
    try {
      let res = await axios.get(`/api/show_times?movieId=${props.movieId}`, {
          headers: {
            Authorization: `Bearer ${auth.token}`
          }
      })
      setShowTimes(res.data['hydra:member'])
    } catch (ex) {
        console.log('axios error', ex)
    }
  }

  const filterByDate = async () => {
    let newShowTimes = []
    showTimes.map(showTime => 
      date.toISOString().slice(0, 10) == showTime.date.slice(0, 10) ? newShowTimes = [...newShowTimes, showTime] : ''
      )
    //console.log(newShowTimes)      
  }

  const options = {
    method: 'GET',
    url: ``
  };

  const onDateChange = (date) => {
    setDate(date)
  }

  useEffect(() => {
    fetchShowTimes()
    filterByDate()
  }, [date])

  return (
    <div className={`d-flex flex-row card m-3 p-3 ${styles.card}`}>
      {
        auth ? 
        <>
          <Calendar
          value={date}
          onChange={onDateChange}
          minDate={new Date()}
          >
          </Calendar>
          <div className="m-1 ml-3">
            <h3>movie screenings on 09.08.2021</h3>
          {showTimes.map(showTime =>
            date.toISOString().slice(0, 10) == showTime.date.slice(0, 10) ? 
            <Link key={showTime.id} to={`/checkout/${props.movieId}/${showTime.id}`}>
              {console.log(date.toISOString(false))}
              <h3>
                <span className="badge badge-warning m-1 btn"> 
                  {showTime.hour.slice(11, 16)}
                </span>
              </h3>
            </Link>
            : 
            null
          )}
          </div>
        </>
        :
        <span>Log in or sign up to buy tickets</span>
      }
    </div>
  ); 
}
