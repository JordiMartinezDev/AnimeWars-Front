
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

    const {anime,userFollowArray,showFollowButton} = props;
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
        <>
        <div className="col">
        <div className="card-group">
                <div className="fondoCard card">
                <Link to={"/animes/" + anime._id}>
                        
        <img src={anime.animeImage} className="tamanoImage card-img-top" alt={anime.name} />
        <div className="textoLink card-body">
            <h5 className="card-title textoLink">Name: {anime.name}</h5>
            <p className="card-text textoLink">Description: {anime.description}</p>
            <p className="card-text textoLink">Genre: {anime.category}</p>
            {/* <p className="card-text">{anime.episodes}</p> */}
        </div>
            </Link>
        </div>
        </div>
      
        </div>
        
            
            {!(showFollowButton==false)&&(follow ? <button onClick={handleLike}> Unfollow</button> : <button onClick={handleLike}> Follow</button>)}
            
            <br></br><br></br><br></br>
        </>
    );
}

export default ShowAnime;