
import "./ShowAnime.css"
import {Link} from 'react-router-dom';
import React from 'react';
import { useParams} from 'react'
import { useEffect,useState,useContext } from 'react';
import animeAPI from '../../services/animeAPI.service';
import { AuthContext } from '../../context/auth.context';


function ShowAnime(props) {
    // const [animeId] = useParams()ente
    //  const {animeId} = useParams()
    
    const { user} = useContext(AuthContext);  

    const {anime,userFollowArray} = props;
    const [animeL, setAnime] = useState([]);
    const [follow, setFollow] = useState(false);
    // const {anime} = props;

    useEffect( ()=> {

        animeAPI.getAnime(animeL)
            .then(response => {
                setAnime(response.data)
            })
        
            userFollows()
    },[])

    useEffect(() => {
        
    })
    function handleLike() {
        
        const uploadData = new FormData();
        uploadData.append("anime", anime.name)
        uploadData.append("category", anime.category)
        uploadData.append("description",anime.description)
        uploadData.append("animeImage", anime.animeImage)
        uploadData.append("episodes", anime.episodes)  
        uploadData.append("followedUsers", user._id)  
        const animeAndUser = {
            anime,
            user: user._id
        }
        animeAPI.followAnime(animeAndUser)
            .then(result => {
                console.log(result)
            })
            .catch(e => console.log(e))
        
        setFollow(!follow)
    }
    
    function userFollows() {
        console.log("entering in userFollows?", userFollowArray.length)
        let following = false
        if (userFollowArray.length > 0) {
            userFollowArray.map(animeId => {
                console.log("AnimeId to check FOLLOWS: ", animeId)
                console.log("This anime's id is : ", anime._id)
                if (animeId == anime._id) following = true;
                
            })
        }

        setFollow(following)
    }

    return (
        <div>
        <div /*className="col"*/>
        <div className="text-center card-group">
                <div className="fondoCard card w-100">
                <Link to={"/animes/" + anime._id}>
                        
        <img src={anime.animeImage} className="tamanoImage card-img-top w-100" alt={anime.name} />
        </Link>
        <div className="textoLink card-body">
            <h3 className="card-title textoLink">{anime.name}</h3>
            {/* <p className="card-text textoLink">Description: {anime.description}</p>
            <p className="card-text textoLink">Genre: {anime.category}</p> */}
            {/* <p className="card-text">{anime.episodes}</p> */}
        </div>
            
        </div>
        </div>
      
        </div>
        
            
            {follow ? <button class="btn btn-danger" onClick={handleLike}> Unfollow</button> : <button className="btn btn-primary" onClick={handleLike}> Follow</button>}
            
            <br></br><br></br><br></br>
        </div>
    );
}

export default ShowAnime;