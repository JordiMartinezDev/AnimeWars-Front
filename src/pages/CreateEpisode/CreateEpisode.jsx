import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { useState } from "react";
import animeAPI from '../../services/animeAPI.service';
import {Navigate, useNavigate} from 'react-router-dom';
import Validator from 'validator'
import { useEffect } from 'react';
<<<<<<< HEAD
=======

>>>>>>> oscar



function CreateEpisode() {
    const[anime, setAnime]= useState("patata");
    
    // const [category, setCategory] = useState("");
    const [animeUrl, setAnimeUrl] = useState("");
    const [description, setDesccription] = useState("");
    const [episodes, setEpisodes] = useState([{}]);
    const [episodeImage, setEpisodeImage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    const [animeNames, setAnimeNames] = useState ([]);
    // const [followedUsers, setFollowedUser]=useState([{}]);
    const navigate = useNavigate();
   
     const handleAnime =(e)=>{
        setAnime(e.target.value);
        console.log ("anime name: ", anime)
        console.log ("anime name target: ", e.target.value)
     }
    // const handleCategory =(e)=>{
    //     setCategory(e.target.value);

    // }
    const handlAnimeUrl = (e) => {
        setAnimeUrl(e.target.value)
    }
    // const handleDescription =(e)=>{
    //     setDesccription(e.target.value);

    // }
    const handleEpisodes =(e)=>{
        setEpisodes(e.target.value);

    }

    
    function submitHandler(e){
        e.preventDefault();
    
        
        const uploadData = new FormData();
        uploadData.append("anime", anime)
        uploadData.append("number", episodes)
        uploadData.append("episodeImage",episodeImage)
        uploadData.append("isPremium", false)
        uploadData.append("episodeUrl", animeUrl)  // lo vermell es igual al model   
        
        console.log(" UPLOADDATA ---> ", uploadData)
        // If anime URL is correct, submit Episode to DB, else... error message

        if (Validator.isURL(animeUrl)) { 
            setErrorMessage('Valid URL')
            

           
            animeAPI.addEpisode(uploadData)
                .then(results => {
                    console.log("aaaaa: ", results.data)
                    navigate("/");
                })
                .catch(err => {
                    console.log("Error CreateEpisode.JSX --> : ", err);
                })
        }
        else {
            setErrorMessage('Not a valid URL')
            
        }
    };
    
    
    const handleFileUpload = (e) => {
        console.log("The file to be uploaded is: ", e.target.files[0]);
        setEpisodeImage(e.target.files[0])
     
        // imageUrl => this name has to be the same as in the model since we pass
        // req.body to .create() method when creating a new movie in '/api/movies' POST route

     
        // service
        //   .uploadImage(uploadData)
        //   .then(response => {
        //     // console.log("response is: ", response);
        //     // response carries "fileUrl" which we can use to update the state
        //     setImageUrl(response.fileUrl);
        //   })
        //   .catch(err => console.log("Error while uploading the file: ", err));
    };


      useEffect (()=>{
        animeAPI.getAnimes()
        .then(results=>{
            // console.log ("Dades: ",results.data)
            // return(<option value={anime.name}>{anime.name}</option>);
            setAnimeNames(results.data) //Aqui gurdem la "Base de Dades" a la variable de animeNames
            console.log ( "Base de dades: ", results.data)
            
        })
        .catch(err=>{
            return("error en la crida");
        })
                        
        }, [])
    

    return (
        <div className='CreateEpisode'>
            <h1> Create Episode Form Page</h1>
           
            <form onSubmit={submitHandler} action="/createEpisode" encType="multipart/form-data">
                
    
                <select className="form-select form-select-lg mb-3" aria-label=".form-select-lg example" name='anime' onChange={handleAnime}>
                    {/* Aqui hem de fer un map, i que cada opccio sigui un anime ja creat */}
                    <option selected>Animes</option> 
                    {animeNames.map(anime =>{
                        return ( <option value={anime.name} >{anime.name}</option>);
                    })
                    }
                    
                    
                </select>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Link</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={handlAnimeUrl} value={animeUrl} />
                    <span style={{ fontWeight: 'bold',color: 'red', }}>{errorMessage}</span>
                </div>
                <div className="mb-3">
                    
                    <label htmlFor="exampleInputPassword1" className="form-label"> Episode Image </label>
                    <input type="file" onChange={(e) => handleFileUpload(e)}  />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Num Episode</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" onChange={handleEpisodes} value={episodes}/>
                </div>
               
               
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> 

        </div>
    )
}

export default CreateEpisode;