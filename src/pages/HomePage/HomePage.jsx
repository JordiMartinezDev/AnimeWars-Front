import "./HomePage.css";
import animeAPI from "../../services/animeAPI.service";
import { useState } from 'react'
import { useEffect} from 'react'
import SearchBar from "../../components/SearchBar/SearchBar";
import SeeMyAnimeList from "../Anime/SeeMyAnimeList";

function HomePage() {
  const [animes, setAnimes] = useState([])
  

  useEffect(() => {
    animeAPI.getAnimes()
    .then(results => {
      setAnimes(results.data);
    })
  }, []);
  
  return (
    <div>
      <SeeMyAnimeList></SeeMyAnimeList>
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
