import React, {useEffect, useState} from 'react';
import requests from './Requests';
import axios from './axios';
import {base_url}  from './Requests';
import './Banner.css'


function Banner() {
    const [movie, setMovie] = useState([]);
    const truncateString =  (string, length) =>  (string.length <= length) ? string : string.slice(0, length) + '...';

    useEffect(() => {
        async function fetchData () {
            const request =await axios.get(requests.fetchTrending);
            setMovie(request.data.results[Math.floor(Math.random() * request.data.results.length)]);
            return request;
        }
        fetchData();
    }, []);

    // console.log(movie);

  return (
    <header 
        className='banner' 
        style={{
            backgroundSize: 'cover', 
            backgroundImage: `url('${base_url}/${movie?.backdrop_path}')`,
            backgroundPosition: 'center center',
        }}
    >
        <div className='banner-contents'>
           <h1 className='banner__title'>
                {movie?.title || movie?.name || movie?.original_name}
           </h1>
           <div className='banner__buttons'>
            <button className='banner__button'>Play</button>
            <button className='banner__button'>My List</button>
            <button className='banner__button'>More Info!</button>
           </div>
            <h1 className='banner__description'> {truncateString(`${movie.overview}`, 250 )}</h1>
        </div>
        <div className='banner--fadebottom'></div>
    </header>
  )
}

export default Banner;