import {Link} from 'react-router-dom';
import React from 'react';
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import animeAPI from '../../services/animeAPI.service';


function ShowAnime() {
    const { animeId } = useParams()
    const [anime, setAnime] = useState([]);
    // const {anime} = props;

    useEffect( ()=> {

        animeAPI.getAnime(animeId)
            .then(response => {
                setAnime(response.data)
                console.log("Anime in ShowAnime: ",response.data)
        })

    },[])

    function handleLike() {
        animeAPI.editAnime(animeId)
            .then(result => {
                console.log("Like Handled? -> ", anime.followedUsers )
        })
    }
    function handleUnlike() {
        
    }
   
    return (
        <>
            {console.log(animeId)}
            {true ? <button onClick={handleUnlike}> Liked</button> : <button onClick={handleLike}>Not Liked Yet</button>}
            
        </>
    );
}

export default ShowAnime;