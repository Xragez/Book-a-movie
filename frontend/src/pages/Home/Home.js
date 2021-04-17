import React from 'react';
import Header from '../../components/Header/Header';
import Movies from '../../components/Movies/Movies';

export default function Home (){
    return (
        <div className="d-flex flex-column">
        <Header/>
        <Movies/>
        </div>
    ); 
}
