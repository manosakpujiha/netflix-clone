import React, { useEffect, useState, useRef } from 'react';
import axios from './axios';
import {base_url}  from './Requests';
import './Row.css';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';


function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);
    const [moviePreview, setMoviePreview] = useState({});

    const [trailerUrl, setTrailerUrl] = useState('');


    const opts = {
        height: '390',
        width: '640',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
    }
    
    useEffect(() => {
       
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]);
  
    // console.log(movies)
    const handleClick = (movie) => {
        console.log(moviePreview)
        
        if (movie) {
            setMoviePreview(movie)
        }
        if (trailerUrl) {
            setTrailerUrl('');
        } else {
            // if (moviePreview === {}) {return}
            movieTrailer(null, { tmdbId: movie.id })
            .then(url => {
                const urlParams = new URLSearchParams(new URL(url).search).get('v')
                setTrailerUrl(urlParams)
            })
            .catch((error) => console.log(error))
        }
    }
  
    return (
    <div className='row'  >
        <h2>{title}</h2>
        
        <div className='row__posters' >
            
            {movies.map((movie) => (
                <img 
                    key={movie.id}
                    onClick={()=> handleClick(movie)}
                    className={`row__poster ${isLargeRow ? 'row__posterLarge' : ''}`}
                    src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                    alt={movie.title} 
                />
            ))}
            
        </div>
        {   trailerUrl && 
            <div  className='row__movie'>
                <div className='row__movie-overlay' onClick={() => handleClick(moviePreview)}> overlay</div>
                <div className='row__movie-close' onClick={() => handleClick(moviePreview)}> {trailerUrl && 'X'}</div>
                <YouTube className='row__movie-iframe' videoId={trailerUrl} opts={opts} />
                <div className='row__movie-overview'> {moviePreview.overview} </div>
            </div>
        }
        
    </div>
  );
}

export default Row;