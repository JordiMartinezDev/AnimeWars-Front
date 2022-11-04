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
      <h1>Profile page</h1>
      <Link to="/editProfileImg/:userId">
        <button>Edit IMG</button>
      </Link>
      
      <Link to="/createAnime/:userId">
        <button>Uploded Episode</button>
      </Link>
      <ProfileAnimeCreatedBox />
      <ProfileFavoriteBox />
      
    </div>

  );
}

export default ProfilePage;
