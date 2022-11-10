import axios from "axios";

const apiUrl = "http://localhost:5005/api";

class ProfileApiService {
 
  editProfile (profile) {
    return axios.put(apiUrl + "/profile/edit/" + profile._id, profile);
  }
  
}

const ProfileAPI = new ProfileApiService();

export default ProfileAPI;