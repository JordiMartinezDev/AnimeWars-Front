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




function ProfilePage() {
  const {user}= useContext(AuthContext)
  console.log("user bo: ", user)
  
  const [username, setUsername] = useState("")
  // const [profileImg, setProfileImg]=useState("")
  // const {usuari} = useParams()
  
  // useEffect(()=>{
  //   ProfileAPI.showProfile(usuari._id)
  //   .then(results =>{
  //     console.log("resssssul: " ,results.data)
  //     setUsername(results.data)
  //     setProfileImg(results.data.profileImg)
      

  //     console.log("results de showProfile: ", results)
  //   })
  //   .catch(err =>{
  //     console.log("error en showProfile: ", err)
  //   })
  // },[])


  useEffect(()=>{
    ProfileAPI.getUserss()
    .then(results =>{
      setUsername(results.data.username)
      console.log ("aaaaaaaaa",results.data);
    })
    .catch(err =>{
      console.log("error en showProfile: ", err)
    })
  },[username])

  

  
  
  return (
    <div>
      {/* <img className="ImgProfile" src="https://themoodproject.com/wp-content/uploads/2020/09/default-team.png" alt="" /> */}
      {/* <a href="/editProfileImg/:userId">Edit profile</a> */}
      <Link to="/editProfileImg/:userId">Edit profile</Link>
      {/* <p>{user?.email}</p> */}
      <p> Hola {username}</p>
      {/* <p>{user?.username}</p> */}
      {/* <img src={user?.profileImg} alt="Profile Image of CurentUser" /> */}
      {/* <img src={profileImg} alt="Profile Image of CurentUser" /> */}
      {/* <img src={user?.backgroundImage} alt="Background Image of CurrentUser" /> */}
      
      
     <ProfileAnimeCreatedBox></ProfileAnimeCreatedBox>
    
    </div>
  );
  
}

export default ProfilePage;
