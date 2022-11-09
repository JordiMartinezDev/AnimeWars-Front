import "./ProfilePage.css";
import EditProfileImg from "../EditProfileImg";
import { Link } from "react-router-dom";
import { useNavigate} from 'react'
import animeAPI from "../../services/animeAPI.service";
import ProfileAnimeCreatedBox from "../../components/ProfileAnimeCreatedBox/ProfileAnimeCreatedBox";
import ProfileFavoriteBox from "../../components/ProfileFavoriteBox/Componente ProfileFavoriteBox";

function ProfilePage() {

  
  
   return (
    <div>
      <img src="https://themoodproject.com/wp-content/uploads/2020/09/default-team.png" alt="" />
      
    <ProfileAnimeCreatedBox></ProfileAnimeCreatedBox>
    
  </div>
   );
  
}

export default ProfilePage;
