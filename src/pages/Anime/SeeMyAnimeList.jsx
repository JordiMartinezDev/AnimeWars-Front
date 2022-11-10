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
    const [userFollowArray,setUserFollowArray] = useState([])
    
    
    const { user} = useContext(AuthContext);  


    useEffect(() => {
        animeAPI.getAnimes()
        .then(results => {
            //console.log("LISTA ANIMES", results.data);
            setAnimes(results.data);
        })
        .catch((err) => {
            console.log(err);
        })
        console.log("This is user in SeeMyAnimeList constructor", user)
        // AQUUI ESTA USR BUIT
        animeAPI.getUser(user)
        .then(result => {
            // setUserFollowArray(result.data.followedByAnimeId)
            console.log("FOLLOWING ANIME ARRAYS: ", userFollowArray)
            
            
        })
            .catch(e => {
            console.log(e)
        })

        
    }, [])

    return (
        <div className="container text-center">
        <h1>My Anime list</h1>
        <div className="row row-cols-5">
               {/* //Aqui haremos un map de los animes que el usuario tenga en su lista
        //y los mostraremos en una card(lo de la card hacerlo con bootstrap en ShowAnime.jsx)) */}
         {animes.map(anime => {         
            return (
                <div key={anime._id}>

                    <ShowAnime anime={anime} userFollowArray={ userFollowArray}></ShowAnime> 
                
                </div>

                );
            })
        }
        </div>
        </div>
    );
}


export default SeeMyAnimeList;

