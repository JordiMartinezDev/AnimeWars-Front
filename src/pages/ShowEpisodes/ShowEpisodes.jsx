import {useEffect, useState} from 'react';
import animeAPI from '../../services/animeAPI.service';
import {useContext} from 'react';
import {AuthContext} from '../../context/auth.context';
import { useParams } from 'react-router-dom';
import ShowEpisode from '../../components/ShowEpisode/ShowEpisode';
import {Link} from 'react-router-dom';
import Episode from '../Episode/Episode';
// import ShowAnime from '../../components/ShowAnime/ShowAnime';


function ShowEpisodes(){

    const [animes, setAnimes] = useState({});
    const {animeId} = useParams();
    
    // const [episodes, setEpisodes] = useState([]);
    // const [temporal, setTemporal] = useState([]);
    
    //context
    // const {user} = useContext(AuthContext);

    // useEffect(() => {
    //     console.log("USEFFECt SHOWEPISODES")
    //     animeAPI.getEpisodes()
    //     .then(results => {
    //         console.log("LISTA EPISODES", results.data);
    //         setEpisodes(results.data);
    //     })
    //     .catch((err) => {
    //         console.log("DA ERROR", err);
    //     })
    // }, [])

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
        <div className="container text-center">
        <h1>Episodes List</h1>
        <div className="row row-cols-5">
               {/* //Aqui haremos un map de los animes que el usuario tenga en su lista
        //y los mostraremos en una card(lo de la card hacerlo con bootstrap en ShowAnime.jsx)) */}
        {console.log("ANIMES ENTRA AQUI??", animes)}
        
        {animes.episodes && animes.episodes.map(episode => {
            return (
                <div key={episode._id}>
               { console.log("Aqui imprime el episodio", episode)}
                <Link to={"/episodes/" + episode._id}>
                <ShowEpisode episode={episode}></ShowEpisode>
                </Link>
                </div>
            )
        })}
         
        </div>
        </div>
    );
}




export default ShowEpisodes;