import React, { useEffect, useState, useRef } from 'react';
import axios from './axios';
import {base_url}  from './Requests';
import Row from './Row';
import requests from './Requests';
import './Swipe.css'


const isLargeRow = true;
const colors = ["red", "orange", "yellow", "green", "blue", "purple", 
"pink", "brown", "gray", "black", "white", "maroon", "teal", "navy", 
"olive", "peach", "lavender", "magenta", "turquoise", "gold"]

export default function ScrollableElement() {
  const elementRef = useRef(null);
  const [movies, setMovies] = useState([]);
    
  useEffect(() => {
     
      async function fetchData() {
          const request = await axios.get(requests.fetchComedyMovies);
          setMovies(request.data.results)
          return request;
      }
      fetchData();
  }, [requests.fetchComedyMovies]);

  console.log(movies)



  function scrollTop() {
    console.log( elementRef.current.scrollTop)
    elementRef.current.scrollTop = 0;
    console.log( elementRef.current.scrollTop)

  }

  function scrollToBottom() {
    console.log( elementRef.current.scrollTop)
    elementRef.current.scrollTop = 425;
    console.log( elementRef.current.scrollTop)
  }

  function scrollToLeft() {
    console.log( elementRef.current.scrollLeft)
    elementRef.current.scrollLeft += (0.5*window.innerWidth);
    console.log( elementRef.current.scrollLeft)
    // elementRef.current.scrollWidth
  }
  function scrollToRight() {
    console.log( elementRef.current.scrollLeft)
    elementRef.current.scrollLeft -=  (0.5*window.innerWidth);
    console.log( elementRef.current.scrollLeft)
    // elementRef.current.scrollWidth
  }

  return (
    <div className="swiper-row" style={{ width:'100vw', height: '135px', display: 'flex'}}>
        <button onClick={scrollToRight} style={{ width:'5%', height: '135px'}}>Scroll to Left</button>

        <div ref={elementRef} className='manos' style={{ width:'100%', height: "135px", overflowX: "scroll",  overflowY: "visible", backgroundColor: 'blue', border: '5px solid green', position: 'relative',}}>
        {movies.map((movie) => (
            
            <img 
                key={movie.id}
                className='row__poster'
                src={`${base_url}${ movie.backdrop_path }`} 
                alt={movie.title} 
            />
        ))}
           
        </div>
        <button onClick={scrollToLeft} style={{ width:'5%', height: '135px'}}>Scroll to Right</button>

     </div>
  );
}
