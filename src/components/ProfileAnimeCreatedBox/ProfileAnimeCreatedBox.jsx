import animeAPI from "../../services/animeAPI.service";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './ProfileAnimeCreatedBox.css';
import { useState } from "react";
import {Navigate, useNavigate} from 'react-router-dom';
// import Validator from 'validator'
import { useEffect } from 'react';
import Validator from 'validator';
import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import ShowEpisode from "../ShowEpisode/ShowEpisode";
import ShowAnime from "../ShowAnime/ShowAnime";



function ProfileAnimeCreatedBox () {
    
    const [episodes, setEpisodes] = useState()
    const [animes, setAnimes] = useState()
    const [userFollowArray,setUserFollowArray] = useState([])

    const [uploadedEpisodes,setUploadedEpisodes] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        animeAPI.getEpisodes()
            .then(results => {
            

                setEpisodes(results.data)
            //console.log("LISTA ANIMES", results.data);
            checkUploadedByUser()
            console.log("EPISODE LIST: ",episodes)
        })
        .catch((err) => {
            console.log(err);
        }) 

        animeAPI.getAnimes()
            .then(results => {


                setAnimes(results.data)
                checkFollowedAnimes()
                console.log("ANIME LIST: ", animes)
            })
        .catch(e=>console.log(e))


    }, [])
    
    useEffect(()=>{
        animeAPI.getEpisodes()
        .then(results => {
            console.log("LISTA ANIMES", results.data);

            setEpisodes(results.data);
            checkUploadedByUser()
            console.log("EPISODE From DB: ",episodes)
        })
        .catch((err) => {
            console.log(err);
        }) 

        animeAPI.getAnimes()
            .then(results => {
                setAnimes(results.data)
                checkFollowedAnimes()
                console.log("ANIME from DB: ", animes)
            })
        .catch(e=>console.log(e))


    }, [user])
    
    

   
    function checkUploadedByUser()
    {
        const tempArray = []
        episodes.map(episode => {
           console.log("EPISODE ID TO COMPARE: ",episode.uploadedByUserId)
            if (episode.uploadedByUserId == user._id) {
                console.log("pushing episode", episode)
                tempArray.push(episode)
            } 
        })
        
        setEpisodes(tempArray)
        
        console.log("USER IS : ", user)
        console.log("Uploaded Episodes: ")
    }
    function checkFollowedAnimes() {
        const tempArray = []
        const tempIdArray = []
        animes.map(anime => {
           console.log("EPISODE ID TO COMPARE: ",anime.followedUsers)
            if (anime.followedUsers == user._id) {
                console.log("pushing episode", anime)
                tempArray.push(anime)
                tempIdArray.push(anime._id)
            } 
        })
        setUserFollowArray(tempIdArray)
        setAnimes(tempArray)
        
        console.log("USER IS : ", user)
        
    }
    function handleDelete(episodeId) {
        console.log("WANT TO DELETE THIS ID ------> ", episodeId)
    }
   

    return (
        <div>
            <h1>Hola desde component ProfileAnimeCreatedBox</h1>
            <div className="card" >
                <img src="..." class="card-img-top" alt="..." width="200px"/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>

            <h2>Animes user follows</h2>
            {animes?.map(anime => {
            
            return <ShowAnime anime={anime} userFollowArray={ userFollowArray} showFollowButton={false}></ShowAnime>
            
            })}

            <h2>Episodes Uploaded By User</h2>
            {episodes?.map(episode => {
            
                return <ShowEpisode episode={episode} uploadedByUser={true} handleDelete={ handleDelete}></ShowEpisode>
            
            })}
            

        </div>
        

    );
}

export default ProfileAnimeCreatedBox;