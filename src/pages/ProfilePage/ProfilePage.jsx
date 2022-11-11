import "./ProfilePage.css";
import EditProfileImg from "../EditProfileImg";
import { Link, useParams } from "react-router-dom";
import { useNavigate} from 'react'
import animeAPI from "../../services/animeAPI.service";
import ProfileAnimeCreatedBox from "../../components/ProfileAnimeCreatedBox/ProfileAnimeCreatedBox";
import ProfileFavoriteBox from "../../components/ProfileFavoriteBox/Componente ProfileFavoriteBox";

import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";
import { useState } from "react";
import { useEffect } from "react";
import ProfileAPI from "../../services/profileAPI.service";
import Navbar from "../../components/Navbar/Navbar";




function ProfilePage() {
  const {user, updateImg, isLoading}= useContext(AuthContext)
  console.log("user bo: ", user)
  
  const [username, setUsername] = useState("")
  const [profileImg, setProfileImg]=useState("")
   const {usuari} = useParams()
  //  console.log("user tocahuevos",usuari)
  
   useEffect(()=>{
    if(isLoading)return
     ProfileAPI.showProfile(user?._id)
     .then(results =>{
       console.log("resssssul: " ,results.data)
       setUsername(results.data.username)
       
      setProfileImg(results.data.profileImg)
      updateImg(results.data.profileImg)

       console.log("results de showProfile: ", results)
     })
     .catch(err =>{
       console.log("error en showProfile: ", err)
    })
   },[isLoading])


  // useEffect(()=>{
  //   ProfileAPI.getUserss()
  //   .then(results =>{
  //     setUsername(results.data.username)
  //     console.log ("aaaaaaaaa",results.data);
  //   })
  //   .catch(err =>{
  //     console.log("error en showProfile: ", err)
  //   })
  // },[])

  

  
  
  return (
    <div>
      
      {/* <img className="ImgProfile" src="https://themoodproject.com/wp-content/uploads/2020/09/default-team.png" alt="" /> */}
      {/* <a href="/editProfileImg/:userId">Edit profile</a> */}
      
      {/* <p>{user?.email}</p> */}
      
      {/* <p>{user?.username}</p> */}
      {/* <img src={user?.profileImg} alt="Profile Image of CurentUser" /> */}
      <div>
        <img className="fotoPerfil" src={profileImg} alt="AW" /> 
        <p className="nomUsuari">{username}</p>
      </div>
       
      {/* <img src={user?.backgroundImage} alt="Background Image of CurrentUser" /> */}
      <Link to="/editProfileImg/:userId">Edit profile</Link>
      <div> 
        <button className="boto btn btn-primary"  ><Link className="dropdown-item" to="/createEpisode/:userId">Uploated Episode</Link></button>
      </div>
       
      
      
     <ProfileAnimeCreatedBox></ProfileAnimeCreatedBox>
    
    </div>
  );
  
}

export default ProfilePage;
