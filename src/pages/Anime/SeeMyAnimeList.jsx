import {useEffect, useState} from 'react';
import animeAPI from '../../services/animeAPI.service';
import {useContext} from 'react';
import {AuthContext} from '../../context/auth.context';
import ShowAnime from '../../components/ShowAnime/ShowAnime';
import { Link } from 'react-router-dom';
import ShowEpisodesId from '../ShowEpisodeId/ShowEpisodeId';


function SeeMyAnimeList(){

    const [animes, setAnimes] = useState([]);
    const [temporal, setTemporal] = useState([]);
    
    //context
    // const {user} = useContext(AuthContext);

    useEffect(() => {
        animeAPI.getAnimes()
        .then(results => {
            //console.log("LISTA ANIMES", results.data);
            setAnimes(results.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div className="container text-center">
        <h1>My Anime list</h1>
        <div className="row row-cols-5">
               {/* //Aqui haremos un map de los animes que el usuario tenga en su lista
        //y los mostraremos en una card(lo de la card hacerlo con bootstrap en ShowAnime.jsx)) */}
         {animes.slice(0,5).map(anime => {         
            return (
                <div key={anime._id}>

                <Link to={"/animes/" + anime._id}>
                <ShowAnime anime={anime}></ShowAnime>
                </Link>
                </div>

                );
            })
        }
        </div>
        </div>
    );
}


export default SeeMyAnimeList;

