import './App.css';
import Banner from './component/Banner';
import Nav from './component/Nav';
import Row from './component/Row'
import requests from './request';
function App() {
  return (
    <div>
      <Nav/>
      <Banner fetchURL={requests.fetchNetflixOriginals}/>

      <Row isPoster={true} title="Trending Movies" fetchURL={requests. fetchTrending}/>

       <Row  title="NetflixOriginals" fetchURL={requests.fetchNetflixOriginals}/>

       <Row title="Top Rated Movies" fetchURL={requests.fetchTopRated}/>
       
       <Row title="Action Movies" fetchURL={requests.fetchActionMovies}/>
       
       <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}/>
       
       <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}/>
       
       <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}/>
       
       <Row title="Documenteries" fetchURL={requests.fetchDocumentaries}/>
    </div>
    
  );
}

export default App;
