import "./HomePage.css";
import animeAPI from "../../services/animeAPI.service";
import { useState } from 'react'
import { useEffect} from 'react'
import SearchBar from "../../components/SearchBar/SearchBar";

function HomePage() {
  const [animes, setAnimes] = useState([])
  

  useEffect(() => {
    console.log(" Result GetAnimes() :  ")
    animeAPI.getAnimes()
    .then(results => {
      setAnimes(results.data);
      console.log(" Result GetAnimes() :  ", results.data)
    })
    console.log(" Result GetAnimes() :  ")
  }, []);
  
  return (
    <div>
      <h1>Home asdsds</h1>

      <SearchBar></SearchBar>
      <div> 
        {/* {animes.map(anime => <ShowAnime anime={anime} key={anime._id}/>)}  */}
        
      </div>

      <div>
      {/* {episodes.map(episode => <ShowEpisode episode={episode} key={episode._id}/>)}  */}

      </div>
      

    </div>
  );
}

export default HomePage;
