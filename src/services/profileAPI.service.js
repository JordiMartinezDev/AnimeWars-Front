import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:5005/api";

class ProfileApiService {
  editProfile(profile) {
    return axios.put(apiUrl + "/profile/edit/" + profile._id, profile);
  }
  showProfile(user) {
    return axios.get(apiUrl + "/profile/" + user);
  }

  // getUserss(){
  //   return axios.get(apiUrl + "/foto");
  // }
  //en el profile page quant lacridis posa devariable lo uqe guardis a la variable
}

const ProfileAPI = new ProfileApiService();

export default ProfileAPI;
