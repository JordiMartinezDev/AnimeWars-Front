import "./ProfilePage.css";
import EditProfileImg from "../EditProfileImg";
import { Link } from "react-router-dom";
import { useNavigate} from 'react'
import animeAPI from "../../services/animeAPI.service";
import ProfileAnimeCreatedBox from "../../components/ProfileAnimeCreatedBox/ProfileAnimeCreatedBox";
import ProfileFavoriteBox from "../../components/ProfileFavoriteBox/Componente ProfileFavoriteBox";

import { AuthContext } from "../../context/auth.context";
import { useContext } from "react";




function ProfilePage() {
  const {user}= useContext(AuthContext)
  console.log("user bo: ", user)
  console.log("imagenProfile bo: ", user?.backgroundImage)

  
  
   return (
    <div>
      {/* <img className="ImgProfile" src="https://themoodproject.com/wp-content/uploads/2020/09/default-team.png" alt="" /> */}
      {/* <a href="/editProfileImg/:userId">Edit profile</a> */}
      <Link to="/editProfileImg/:userId">Edit profile</Link>
      <p>{user?.email}</p>
      <p>{user?.username}</p>
      <img src={user?.profileImg} alt="Profile Image of CurentUser" />
      <img src={user?.backgroundImage} alt="Background Image of CurrentUser" />
      
      
    <ProfileAnimeCreatedBox></ProfileAnimeCreatedBox>
    
  </div>
   );
  
}

export default ProfilePage;
