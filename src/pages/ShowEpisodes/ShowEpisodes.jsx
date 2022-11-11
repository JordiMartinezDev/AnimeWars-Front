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

    const [dbUser,setDbUser] = useState()
    const { animeId } = useParams();
    const { user } = useContext(AuthContext)
    const [deleteCount, setDeleteCount] = useState(0);
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
        animeAPI.getAnime(animeId)
        .then(results => {
            console.log("LISTA EPISODES ENTRA AQUI?", results.data);
            setAnimes(results.data);
        })
        .catch((err) => {
            console.log("DA ERROR", err);
        })
        
    }, [])
    useEffect(() => {
        animeAPI.getAnime(animeId)
        .then(results => {
            console.log("LISTA EPISODES ENTRA AQUI?", results.data);
            setAnimes(results.data);
        })
        .catch((err) => {
            console.log("DA ERROR", err);
        })
        getUserFromDb()
    }, [user,deleteCount])

    function getUserFromDb() {
        animeAPI.getUser(user)
            .then(result => {
                console.log("RESULT USEr FROM BACK : ", result.data)
            setDbUser(result.data)
            })
        .catch(e=>console.log(e))
            console.log("cheat",user?._id)
    }

    function handleDelete(episodeId) {
        animeAPI.deleteEpisode(episodeId)
            .then(result=> {
            console.log("done")
            })
            .catch(e => console.log(e))
        setDeleteCount(deleteCount+1)
        
    }

    return (
        <div className="container text-center">
        <br></br><br></br>
            <h1 className='text-white'>Episodes List</h1>
            <br></br>
            <img src={animes.animeImage } width="500px" height="300px"/>
            <br></br><br></br><br></br><br></br>
        <div className="row">
       
               {/* //Aqui haremos un map de los animes que el usuario tenga en su lista
        //y los mostraremos en una card(lo de la card hacerlo con bootstrap en ShowAnime.jsx)) */}
        {/* {console.log("ANIMES ENTRA AQUI??", animes)} */}
        
        {animes.episodes && animes.episodes.map(episode => {
            return (
                <div key={episode._id} className="col-sm-6 col-lg-4 col-xl-2">
               { console.log("Aqui imprime el episodio", dbUser?.isAdmin)}
                    
                <ShowEpisode episode={episode} uploadedByUser={dbUser?.isAdmin} handleDelete={ handleDelete}></ShowEpisode>
                
                </div>
            )
        })}
        </div>
        <br></br><br></br>
        </div>
    );
}




export default ShowEpisodes;