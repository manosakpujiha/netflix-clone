import React, { useEffect, useState, useRef } from 'react';
import axios from './axios';
import {base_url}  from './Requests';
import './Row.css';
function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    
    useEffect(() => {
       
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);
  
    // console.log(movies)

  
    return (
    <div className='row ' >
        <h2>{title}</h2>
        
        <div className='row__posters' >
            
            {movies.map((movie) => (
                <img 
                    key={movie.id}
                    className={`row__poster ${isLargeRow ? 'row__posterLarge' : ''}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                    alt={movie.title} 
                />
            ))}
            
        </div>
    </div>
  );
}

export default Row;