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
  
  // return ();
  //   // <div>
  //   //   {/* <h1>Profile page</h1>
  //   //   <Link to="/editProfileImg/:userId">
  //   //     <button>Edit IMG</button>
  //   //   </Link>
      
  //   //   <Link to="/createAnime/:userId">
  //   //     <button>Uploded Anime</button>
  //   //   </Link>
  //   //   <form className="container" onSubmit={submitHandler}>
  //   //             <div className="mb-3">
  //   //                 <label htmlFor="titleApartment" className="form-label">Title</label>
  //   //                 <input type="text" className="form-control" id="titleApartment" aria-describedby="emailHelp" value={form.title} onChange={handleTitle}/>
  //   //             </div>
  //   //             <div className="mb-3">
  //   //                 <label htmlFor="imageApartment" className="form-label">Image</label>
  //   //                 <input type="text" className="form-control" id="imageApartment" value={form.image} onChange={handleImage}/>
  //   //             </div>
  //   //             <div className="mb-3">
  //   //                 <label htmlFor="priceApartment" className="form-label">Price per day</label>
  //   //                 <input type="number" className="form-control" id="priceApartment" value={form.price} onChange={handlePrice}/>
  //   //             </div>
  //   //             <button type="submit" className="btn btn-primary">Submit</button>
  //   //             </form> */}
  //   // </div>
}

export default ProfilePage;
