import {useEffect, useState} from 'react';
import animeAPI from '../../services/animeAPI.service';
import ShowEpisode from '../../components/ShowEpisode/ShowEpisode';
import {useContext} from 'react';
import {AuthContext} from '../../context/auth.context';

import {Link, useParams} from 'react-router-dom';
// import ShowAnime from '../../components/ShowAnime/ShowAnime';

//ESTA PAGINA MUESTRA TODOS LOS EPISODIOS DE UNA ANIME EN CONCRETO
function ShowEpisodesId(){

    const [animes, setAnimes] = useState([]);
    const {animeId} = useParams();
    
    //context
    // const {user} = useContext(AuthContext);

    useEffect(() => {
        console.log("USEFFECt SHOWEPISODES")
        animeAPI.getAnime(animeId)
        .then(results => {
            console.log("LISTA EPISODES ENTRA AQUI?", results.data);
            setAnimes(results.data);
        })
        .catch((err) => {
            console.log("DA ERROR", err);
        })
    }, [])

    return (
        <div class="container text-center">
        <h1> Episodios de anime concreto</h1>
        <div class="row row-cols-5">
        {animes.episodes.map(episode => {
            return (
                <div>
                <Link to={"/episode/" + episode._id}>
                    {console.log("EPISODE SHOW", episode)}
                <ShowEpisode episode={episode} key={episode._id}></ShowEpisode>
                </Link>
               
                
            </div>

                );
            })
        }
        </div>
        </div>
    );
}




export default ShowEpisodesId;