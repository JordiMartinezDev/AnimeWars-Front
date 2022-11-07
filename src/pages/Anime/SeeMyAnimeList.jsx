import {useEffect, useState} from 'react';
import animeAPI from '../../services/animeAPI.service';
import {useContext} from 'react';
import {AuthContext} from '../../context/auth.context';
import ShowAnime from '../../components/ShowAnime/ShowAnime';


function SeeMyAnimeList(){

    const [animes, setAnimes] = useState([]);
    const [temporal, setTemporal] = useState([]);
    
    //context
    // const {user} = useContext(AuthContext);

    useEffect(() => {
        animeAPI.getAnimes()
        .then(results => {
            console.log("LISTA ANIMES", results.data);
            setAnimes(results.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])

    return (
        <div class="container text-center">
        <h1>My Anime list</h1>
        <div class="row row-cols-5">
               {/* //Aqui haremos un map de los animes que el usuario tenga en su lista
        //y los mostraremos en una card(lo de la card hacerlo con bootstrap en ShowAnime.jsx)) */}
         {animes.slice(0,5).map(anime => {         
            return (
                <div>
                <ShowAnime anime={anime}></ShowAnime>
                {/* {apartments.map(apartment => <Apartment apartment={apartment} key={apartment._id}/>)}
                    <p>{anime.name}</p> */}
                </div>

                );
            })
        }
        </div>
        </div>
    );
}

export default SeeMyAnimeList;

