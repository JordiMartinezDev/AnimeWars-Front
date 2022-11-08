import {Link} from 'react-router-dom';
import React from 'react';
import { useParams} from 'react'
import { useEffect,useState } from 'react';
import animeAPI from '../../services/animeAPI.service';


function ShowAnime(props) {
    const {animeId} = useParams()
    
    const {anime} = props;

    const [animeL, setAnime] = useState([]);
    // const {anime} = props;

    useEffect( ()=> {

        animeAPI.getAnime(animeId)
            .then(response => {
                setAnime(response.data)
                console.log("Anime in ShowAnime: ",response.data)
        })

    },[])

    function handleLike() {
        const uploadData = new FormData();
        // uploadData.append("anime", animeL)
        // uploadData.append("number", episodes)
        // uploadData.append("episodeImage",episodeImage)
        // uploadData.append("isPremium", false)
        // uploadData.append("episodeUrl", animeUrl)  

        animeAPI.editAnime(animeId)
            .then(result => {
                console.log("Like Handled? -> ", uploadData)
        })
    }
    function handleUnlike() {
        
    }


    return (
        <>
            {true ? <button onClick={handleUnlike}> Liked</button> : <button onClick={handleLike}>Not Liked Yet</button>}
        <div class="col">
        <div class="card-group">
        <div class="card">
        <img src={anime.animeImage} className="card-img-top" alt={anime.name} />
        <div className="card-body">
            <h5 className="card-title">Name: {anime.name}</h5>
            <p className="card-text">Description: {anime.description}</p>
            <p className="card-text">Genre: {anime.category}</p>
            <p className="card-text">{anime.episodes}</p>
        </div>
        </div>
        </div>
            </div>
            
        </>
    );
}

export default ShowAnime;