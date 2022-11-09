import animeAPI from "../../services/animeAPI.service";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './ProfileAnimeCreatedBox.css';
import { useState } from "react";
import {Navigate, useNavigate} from 'react-router-dom';
// import Validator from 'validator'
import { useEffect } from 'react';
import Validator from 'validator';



function ProfileAnimeCreatedBox () {
    
    // let randomSelect = Math.floor(Math.random()*data.length);
    // let dataView = data.slice(0,4);

    // useEffect (()=>{
    //     animeAPI.getAnimes()
    //     .then(results=>{
    //         // console.log ("Dades: ",results.data)
    //         // return(<option value={anime.name}>{anime.name}</option>);
    //         setAnimeNames(results.data) //Aqui gurdem la "Base de Dades" a la variable de animeNames
    //         console.log ( "Base de dades: ", results.data)
            
    //     })
    //     .catch(err=>{
    //         return("error en la crida");
    //     })
                        
    //     }, [])
    useEffect(()=>{
        
    })
    
    
    
   

    console.log ("dades :")
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