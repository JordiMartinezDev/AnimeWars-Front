import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { useState } from "react";
import animeAPI from '../../services/animeAPI.service';
import {Navigate, useNavigate} from 'react-router-dom';
import validator from 'validator';
import Validator from 'validator';



function CreateAnime() {
    const[name, setName]= useState("");
    const [category, setCategory] = useState("");
    const [animeUrl, setAnimeUrl] = useState("");
    const [description, setDesccription] = useState("");
    // const [episodes, setEpisodes] = useState([{}]);
    const [episodeImage, setEpisodeImage] = useState('')
    const [errorMessage, setErrorMessage] = useState('')
    // const [followedUsers, setFollowedUser]=useState([{}]);
    const navigate = useNavigate();
   
    const handleName =(e)=>{
        setName(e.target.value);
    }
    const handleCategory =(e)=>{
        setCategory(e.target.value);

    }
    // const handlAnimeUrl = (e) => {
    //     setAnimeUrl(e.target.value)
    // }
    const handleDescription =(e)=>{
        setDesccription(e.target.value);

    }
    // const handleEpisodes =(e)=>{
    //     setEpisodes(e.target.value);

    // }
    // const handleFollowers =()=>{
    //     const copiyName = [... name];

    // }

    function submitHandler(e){
        e.preventDefault();
        console.log("Hola desde submit")
        
        const uploadData = new FormData();
        uploadData.append("name", name)
        uploadData.append("category", category)
        // uploadData.append("animeUrl", false)
        uploadData.append("description", description)   
        uploadData.append("animeImage",episodeImage)

       

        
            
            
            animeAPI.addAnime(uploadData)
                .then(results => {
                    console.log("aaaaa: ", results)
                    navigate("/");
                })
                .catch(err => {
                    console.log("error: ", err);
                })
        
        
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

    return (
        <div>
            <h1 className="text-white"> Create Anime </h1> 
            <br></br>
            <form onSubmit={submitHandler} action="/createEpisode">
                <div className="mb-3 text-white">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Anime Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={handleName} value={name}/>
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Link</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={handlAnimeUrl} value={animeUrl} />
                    <span style={{
          fontWeight: 'bold',
          color: 'red',
        }}>{errorMessage}</span>
                </div> */}
                <div className="mb-3 text-white">
                    
                    <label htmlFor="exampleInputPassword1" className="form-label"> Anime Image </label>
                    <input  type="file" onChange={(e) => handleFileUpload(e)}  />
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Num Episode</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" onChange={handleEpisodes} value={episodes}/>
                </div> */}
                <div className="mb-3 text-white">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={handleDescription} value={description}/>
                </div>
                <div className="mb-3 text-white">
                    <label htmlFor="exampleInputPassword1" className="form-label">Category</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={handleCategory} value={category}/>
                </div>
                {/* <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Followers</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" value={followedUsers}/>
                </div> */}
                
                <button type="submit" className="btn btn-primary">Submit</button>
                
            </form> 
        </div>
    )
}

export default CreateAnime;





