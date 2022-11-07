import "./ProfilePage.css";
import EditProfileImg from "../EditProfileImg";
import { Link } from "react-router-dom";
import { useNavigate} from 'react'
import animeAPI from "../../services/animeAPI.service";
import ProfileAnimeCreatedBox from "../../components/ProfileAnimeCreatedBox/ProfileAnimeCreatedBox";
import ProfileFavoriteBox from "../../components/ProfileFavoriteBox/Componente ProfileFavoriteBox";

function ProfilePage() {

  // const submitHandler = (e) => {
  //   const [form, setForm] = useState({image: ""});

  //   const navigate = useNavigate();

    
  //   const handleImage = (e) => {
  //       const copiaForm = {...form};
  //       copiaForm.image = e.target.value;
  //       setForm(copiaForm)
  //   }

    
  //   e.preventDefault();
  //   const newProfileImage = {
  //       img: form.image,
  //   };
    
  //   animeAPI.addApartment(newProfileImage)
  //   .then(results => {
  //       navigate("/");
  //   })
  //   .catch(err => {
  //       // navigate("/error");
  //   })
  // }
  
   return (
    <div>
    <ProfileAnimeCreatedBox></ProfileAnimeCreatedBox>
    
  </div>
   );
  
}

export default ProfilePage;
