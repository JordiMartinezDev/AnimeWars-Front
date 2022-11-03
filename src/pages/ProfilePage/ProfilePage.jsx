import "./ProfilePage.css";
import EditProfileImg from "../EditProfileImg";
import { Link } from "react-router-dom";

function ProfilePage() {
  return (
    <div>
      <h1>Profile page</h1>
      <Link to="/editProfileImg/:userId">
        <button>Edit IMG</button>
      </Link>
      
      <Link to="/createAnime/:userId">
        <button>Uploded Anime</button>
      </Link>
    </div>
  );
}

export default ProfilePage;
