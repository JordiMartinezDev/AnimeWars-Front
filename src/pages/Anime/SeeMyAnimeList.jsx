import {useEffect, useState} from 'react';
import animeAPI from '../../services/animeAPI.service';
import {useContext} from 'react';
import {AuthContext} from '../../context/auth.context';
import ShowAnime from '../ShowAnime/ShowAnime';

function SeeMyAnimeList(){

    const [animes, setAnimes] = useState([]);

    //context
    const {user} = useContext(AuthContext);

    useEffect(() => {
        animeAPI.getAnimes()
        .then((results) => {
            console.log("LISTA ANIMES", results.data);
            setAnimes(results.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div>
        <h1>My Anime list</h1>
        {/* //Aqui haremos un map de los animes que el usuario tenga en su lista
        //y los mostraremos en una card(lo de la card hacerlo con bootstrap en ShowAnime.jsx)) */}
        {animes.map((anime) => <ShowAnime anime={anime} key={anime._id}></ShowAnime>)}
        </div>

    );
}


export default SeeMyAnimeList;