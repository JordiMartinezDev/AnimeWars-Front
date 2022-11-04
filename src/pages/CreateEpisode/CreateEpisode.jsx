import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { useState } from "react";
import animeAPI from '../../services/animeAPI.service';
import {Navigate, useNavigate} from 'react-router-dom';



function CreateEpisode() {
    const[name, setName]= useState("");
    const [category, setCategory] = useState("");
    const [animeUrl, setAnimeUrl] = useState("");
    const [description, setDesccription] = useState("");
    const [episodes, setEpisodes] = useState([{}]);
    // const [followedUsers, setFollowedUser]=useState([{}]);
    const navigate = useNavigate();
   
    const handleName =(e)=>{
        setName(e.target.value);
    }
    const handleCategory =(e)=>{
        setCategory(e.target.value);

    }
    const handlAnimeUrl =(e)=>{
        setAnimeUrl(e.target.value);
    }
    const handleDescription =(e)=>{
        setDesccription(e.target.value);

    }
    const handleEpisodes =(e)=>{
        setEpisodes(e.target.value);

    }

    
    // const handleFollowers =()=>{
    //     const copiyName = [... name];

    // }
    function submitHandler(e){
        e.preventDefault();
        const newAnime = {
            name: name,
            number: episodes,
            episodeImg: "addsfee",
            isPremium: false,
            episodeUrl: "",
        };
        animeAPI.addEpisode(newAnime)
        .then(results=>{
            console.log("aaaaa: ", results)
            navigate("/");
        })
        .catch(err =>{
            console.log("error: ", err);
        })
    };
    

    return (
        <div>
            <h1> Create Episode Form Page</h1> 
            <form onSubmit={submitHandler} action="/createEpisode">
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label" >Anime Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={handleName} value={name}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Link</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={handlAnimeUrl} value={animeUrl}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Num Episode</label>
                    <input type="number" className="form-control" id="exampleInputEmail1" onChange={handleEpisodes} value={episodes}/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
                    <input type="text" className="form-control" id="exampleInputEmail1" onChange={handleDescription} value={description}/>
                </div>
                <div className="mb-3">
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

export default CreateEpisode;