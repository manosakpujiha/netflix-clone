import './App.css';
import Row from './Row';
import requests from './Requests.js';

function App() {
  return (
    <div className="App">
       <Row title='Action' fetchUrl={requests.fetchActionMovies} isLargeRow={true}/>
       <Row title='Comedy' fetchUrl={requests.fetchComedyMovies}/>
       <Row title='Trending Now' fetchUrl={requests.fetchTrending}/>
    </div>
  );
}

export default App;
