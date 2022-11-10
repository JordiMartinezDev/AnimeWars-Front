import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { useContext } from 'react';
import { AuthContext } from '../context/auth.context';
import { useState } from 'react';
import ProfileAPI from '../services/profileAPI.service';
import {Navigate, useNavigate} from 'react-router-dom';

function EditProfileImg() {

  const {user}= useContext(AuthContext)
  //console.log("user aaa: ", user)
  
  const navigate = useNavigate();
  
  const [profileImg, setProfileImg]=useState("")
  const [username, setUsername]=useState("")

 

  const handleProfileImg =(e)=>{
    setProfileImg(e.target.files[0]);

  }
  
  const handleUsername =(e)=>{
    setUsername(e.target.value);

  }

  function submitHandler(e){
    e.preventDefault();
    const uploadData = new FormData();
    uploadData.append("username", username)
    uploadData.append("profileImg",profileImg)
    uploadData.append("userId", user._id)

    ProfileAPI.editProfile(uploadData)
    .then(results=>{
      console.log("results desde submit edit profile", results)
      navigate("/profile")
    })
    .catch(err=>{
      return("error en la crida");
  })

  }

  


  return (
    <div>
      <p>Hola desde el component/page EditProfileImg</p>
      <p>Aqui posem editar img de perfil i la img del background de perfil</p>
    <form onSubmit={submitHandler} action="/profile/edit/:profileId" encType="multipart/form-data">
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label"> Profile Image </label>
        <input type="file" onChange={(e) => handleProfileImg(e)}  />
      </div>
      
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" > User Name </label>
        <input type="text" className="form-control" id="exampleInputEmail1" onChange={handleUsername} value={username}/>
      </div>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
      
      

    </div>
  );
}

export default EditProfileImg;


