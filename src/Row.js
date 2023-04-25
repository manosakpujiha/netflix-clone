import React, { useEffect, useState, useRef } from 'react';
import axios from './axios';
import {base_url}  from './Requests.js';
import './Row.css';


function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const scrollableRef = useRef(null);
    function scrollRight() {
        scrollableRef.current.scrollLeft += 100; // Change 100 to desired amount of pixels to scroll
      }
    
      function scrollLeft() {
        scrollableRef.current.scrollLeft -= 100; // Change 100 to desired amount of pixels to scroll
      }
    useEffect(() => {
       
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);
  
    console.log(movies)
  
    return (
    <div className='row scrollable' ref={scrollableRef}>
        <h2>{title}</h2>
        
        <div className='row__posters'>
        <button onClick={scrollLeft}>Scroll Left</button>
            
            {movies.map((movie) => (
                
                <img 
                    key={movie.id}
                    className='row__poster'
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                    alt={movie.title} 
                />
            ))}
             <button onClick={scrollRight}>Scroll Right</button>
            
        </div>
    </div>
  );
}

export default Row;