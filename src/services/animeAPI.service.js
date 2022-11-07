import axios from "axios";

const apiUrl = "http://localhost:5005/api";

class AnimeApiService {
  getAnimes() {
    return axios.get(apiUrl + "/animes");
  }
  getAnime(animeId) {
    return axios.get(apiUrl + "/animes" + animeId);
  }
  getAnimeSearch(searchValue) {
    return axios.get(apiUrl + "/animes/searchvalue", searchValue);
  }
  deleteAnime(animeId) {
    return axios.delete(apiUrl + "/animes" + animeId);
  }
  addAnime(anime) {
    // return axios.post(apiUrl, {img: apartment.img, title: apartment.title, pricePerDay: apartment.pricePerDay});
    return axios.post(apiUrl + "/animes", anime);
  }
  editAnime(anime) {
    return axios.put(apiUrl + "/animes" + anime._id, anime);
  }

  // ------ Episodes -------

  getEpisodes() {
    return axios.get(apiUrl + "/episodes");
  }
  getEpisode(episodeId) {
    return axios.get(apiUrl + "/episodes" + episodeId);
  }
  deleteEpisode(episodeId) {
    return axios.delete(apiUrl + "/episodes" + episodeId);
  }
  addEpisode(episode) {
    // return axios.post(apiUrl, {img: apartment.img, title: apartment.title, pricePerDay: apartment.pricePerDay});
    return axios.post(apiUrl + "/episodes", episode);
  }
  editEpisode(episode) {
    return axios.put(apiUrl + "/episodes" + episode._id, episode);
  }
}

const animeAPI = new AnimeApiService();

export default animeAPI;
