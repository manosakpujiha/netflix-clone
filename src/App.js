import React from "react";
import './App.css';
import Row from './Row';
import Swipe from './Swipe';
import requests from './Requests';
import Banner from './Banner';
import Testpage from './Testpage';
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Row title='Trending Now' fetchUrl={requests.fetchTrending} isLargeRow/>

      <Row 
        title='Action' 
        fetchUrl={requests.fetchActionMovies}
      />
      <Row title='Comedy' fetchUrl={requests.fetchComedyMovies} />
      {/* <Swipe/> */}
      {/* <Testpage/> */}
    </div>
  );
}

export default App;
