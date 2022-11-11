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
    const [deleteCount, setDeleteCount] = useState(0);

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

    }, [user,deleteCount,userFollowArray])
    
    

   
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
        animeAPI.deleteEpisode(episodeId)
            .then(result=> {
            console.log("done")
            })
            .catch(e => console.log(e))
        setDeleteCount(deleteCount+1)
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
            
            {console.log("IS ADMIN????? ", dbUser?.isAdmin)}
            {(dbUser?.isAdmin)&&<Link to={"/admin/panel"}>
                <button className="btn btn-primary"> Admin Panel </button>
            </Link>}
            

            <div className="container text-center">
            <br></br><br></br>
            <h2 className='text-white'>Animes follows</h2>
            <br></br>
            <div className="row ">
            {animes?.map(anime => {
                return (
                    
                <div key={anime._id} className="col-sm-6 col-lg-4 col-xl-2">
                <ShowAnime anime={anime} userFollowArray={ userFollowArray} showFollowButton={false}></ShowAnime>
                </div>
            )
            })}
                { console.log("ARRAY de USERFOLLOWARRAY ANIMES!! ",userFollowArray) }
                    
            </div>
            </div>

            <div className="container text-center">
            <br></br><br></br>
            <h2 className='text-white'>Episodes Uploaded By User</h2>
            <br></br>
            <div className="row ">
            {episodes?.map(episode => {
                return(
                    <div key={episode._id} className="col-sm-6 col-lg-4 col-xl-2">
                    <ShowEpisode episode={episode} uploadedByUser={true} handleDelete={ handleDelete}></ShowEpisode>
                    </div>
                ) 
                
            })}
            </div>
            </div>
            

        </div>
        

    );
}

export default ProfileAnimeCreatedBox;