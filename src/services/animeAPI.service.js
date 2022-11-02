import axios from "axios";

// const apiUrl = "https://apartmentsback.herokuapp.com/api/apartments";
const apiUrl = "http://localhost:5005/api/apartments";

class AnimeApiService {
  getAnimes() {
    return axios.get(apiUrl);
  }
  getAnime(animeId) {
    return axios.get(apiUrl + "/" + animeId);
  }
  deleteAnime(animeId) {
    return axios.delete(apiUrl + "/" + animeId);
  }
  addAnime(anime) {
    // return axios.post(apiUrl, {img: apartment.img, title: apartment.title, pricePerDay: apartment.pricePerDay});
    return axios.post(apiUrl, anime);
  }
  editAnime(anime) {
    return axios.put(apiUrl + "/" + anime._id, anime);
  }
}

const animeAPI = new AnimeApiService();

export default animeAPI;
