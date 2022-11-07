import {useEffect, useState} from 'react';
import animeAPI from '../../services/animeAPI.service';
import {useContext} from 'react';
import {AuthContext} from '../../context/auth.context';
import ShowEpisode from '../../components/ShowEpisode/ShowEpisode';
import {Link} from 'react-router-dom';
// import ShowAnime from '../../components/ShowAnime/ShowAnime';


function ShowEpisodes(){

    const [episodes, setEpisodes] = useState([]);
    const [temporal, setTemporal] = useState([]);
    
    //context
    // const {user} = useContext(AuthContext);

    useEffect(() => {
        console.log("USEFFECt SHOWEPISODES")
        animeAPI.getEpisodes()
        .then(results => {
            console.log("LISTA EPISODES", results.data);
            setEpisodes(results.data);
        })
        .catch((err) => {
            console.log("DA ERROR", err);
        })
    }, [])

    return (
        <div class="container text-center">
        <h1>Episodes List</h1>
        <div class="row row-cols-5">
               {/* //Aqui haremos un map de los animes que el usuario tenga en su lista
        //y los mostraremos en una card(lo de la card hacerlo con bootstrap en ShowAnime.jsx)) */}
         {episodes.slice(0,5).map(episode => {         
            return (
                <div>
                <Link to={"/episode/" + episode._id}>
                    {console.log("EPISODE SHOW", episode)}
                     <ShowEpisode episode={episode}></ShowEpisode>
                    {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
                </Link>
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




export default ShowEpisodes;