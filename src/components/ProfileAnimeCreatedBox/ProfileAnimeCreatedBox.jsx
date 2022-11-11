import animeAPI from "../../services/animeAPI.service";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './ProfileAnimeCreatedBox.css';
import { useState } from "react";
import {Link, Navigate, useNavigate} from 'react-router-dom';
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
    const [userFollowArray, setUserFollowArray] = useState([])
    const [dbUser,setDbUser] = useState()

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

        getUserFromDb()

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
            })
        .catch(e=>console.log(e))
            getUserFromDb()

    }, [user])
    
    

   
    function checkUploadedByUser()
    {
        const tempArray = []
        episodes.map(episode => {
            if (episode.uploadedByUserId == user._id) {
                tempArray.push(episode)
            } 
        })
        
        setEpisodes(tempArray)
        
    }
    function checkFollowedAnimes() {
        const tempArray = []
        const tempIdArray = []
        animes.map(anime => {
            if (anime.followedUsers == user._id) {
                tempArray.push(anime)
                tempIdArray.push(anime._id)
            } 
        })
        setUserFollowArray(tempIdArray)
        setAnimes(tempArray)
        
        
    }
    function handleDelete(episodeId) {
        console.log("WANT TO DELETE THIS ID ------> ", episodeId)
    }

    function getUserFromDb() {
        animeAPI.getUser(user)
            .then(result => {
                console.log("RESULT USEr FROM BACK : ", result.data)
            setDbUser(result.data)
            })
        .catch(e=>console.log(e))
            console.log("cheat",user._id)
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
            {console.log("IS ADMIN????? ", dbUser?.isAdmin)}
            {(dbUser?.isAdmin)&&<Link to={"/admin/panel"}>
                <button> Admin Panel </button>
            </Link>}
            
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