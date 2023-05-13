import React from 'react';
import './Testpage.css';
import axios from 'axios';
// import { createClient } from 'pexels';
// const client = createClient('1hJyLTYymhFI7vSrWhikTtk9KnkxVPSOgWZSkSY2eeCAcg5f3FjocZPc');
// console.log(12345, client)
function Testpage() {
    function getVideos() {
        const apiKey = '1hJyLTYymhFI7vSrWhikTtk9KnkxVPSOgWZSkSY2eeCAcg5f3FjocZPc';
        const url = `https://api.pexels.com/videos/search?query=nature&per_page=10`;
        
        return axios.get(url, { headers: { Authorization: apiKey } })
          .then(response => {

            console.log(response.data.videos)
          }
            
            
            );
      }
      getVideos()

  return (
    <div className='Testpage'>
        <div className='Testpage-inner'>
            box 1
        </div>
        <div className='Testpage-inner'>
            box 2
        </div>
        <div className='Testpage-inner'>
            box 3
        </div>
        <div className='Testpage-inner'>
            box 4
        </div><div className='Testpage-inner'>
            box 5
        </div><div className='Testpage-inner'>
            box 6
        </div><div className='Testpage-inner'>
            box 7
        </div><div className='Testpage-inner'>
            box 8
        </div><div className='Testpage-inner'>
            box 9
        </div><div className='Testpage-inner'>
            box 10
        </div>
    </div>
  )
}

export default Testpage