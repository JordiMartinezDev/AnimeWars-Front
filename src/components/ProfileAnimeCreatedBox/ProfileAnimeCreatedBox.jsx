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



function ProfileAnimeCreatedBox () {
    
    const [animes, setAnimes] = useState([])
    const {user} = useContext(AuthContext)

    useEffect(()=>{
        animeAPI.getAnimes()
        .then(results => {
            //console.log("LISTA ANIMES", results.data);
            setAnimes(results.data);
        })
        .catch((err) => {
            console.log(err);
            console.log("ERROR, USER NOT LOGGED AND TRYING to SEE ANIMELIST")
        }) 
    },[])
    
   
    function checkUploadedByUser()
    {
        
    }
   

    return (
        <div>
            <h1>Hola desde component ProfileAnimeCreatedBox</h1>
            <div className="card" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            

        </div>
        

    );
}

export default ProfileAnimeCreatedBox;