import axios from "axios";

const apiUrl = "http://localhost:5005/api";

class ProfileApiService {
 
  editProfile (profile) {
    return axios.put(apiUrl + "/profile/edit/" + profile._id, profile);
  }
  showProfile (user){
    return axios.get (apiUrl + "/profile/" + user);
  }

  getUserss(){
    return axios.get(apiUrl + "/usuaris");
  }
  //en el profile page quant lacridis posa devariable lo uqe guardis a la variable 
  
}

const ProfileAPI = new ProfileApiService();

export default ProfileAPI;