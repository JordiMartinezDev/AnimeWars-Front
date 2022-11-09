import {Link} from 'react-router-dom';
import React from 'react';
import { useParams} from 'react'
import { useEffect,useState,useContext } from 'react';
import animeAPI from '../../services/animeAPI.service';
import { AuthContext } from '../../context/auth.context';


function ShowAnime(props) {
    // const [animeId] = useParams()
    //  const {animeId} = useParams()
    
    const { user} = useContext(AuthContext);  

    const {anime,userFollowArray} = props;

    const [animeL, setAnime] = useState([]);
    // const {anime} = props;

    useEffect( ()=> {

        animeAPI.getAnime(animeL)
            .then(response => {
                setAnime(response.data)
            })
        

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
    }
    function handleUnlike() {
        
    }
    function userFollows() {
        console.log("entering in userFollows?", userFollowArray.length)
        
        if (userFollowArray.length > 0)
        userFollowArray.map(animeId => {
            console.log("AnimeId to check FOLLOWS: ",animeId)
            if (animeId == anime._id) return true;
        })

        return false;
    }

    return (
        <>
        <div class="col">
        <div class="card-group">
                    <div class="card">
                <Link to={"/animes/" + anime._id}>
                        
        <img src={anime.animeImage} className="card-img-top" alt={anime.name} />
        <div className="card-body">
            <h5 className="card-title">Name: {anime.name}</h5>
            <p className="card-text">Description: {anime.description}</p>
            <p className="card-text">Genre: {anime.category}</p>
            <p className="card-text">{anime.episodes}</p>
                            </div>
                            </Link>
        </div>
        </div>
            </div>
            
            {userFollows() ? <button onClick={handleUnlike}> Unfollow</button> : <button onClick={handleLike}> Follow</button>}
            
        </>
    );
}

export default ShowAnime;