import "./App.css";
import { Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import HomePage from "./pages/HomePage/HomePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignupPage from "./pages/SignupPage/SignupPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage"
import EditProfileImg from "./pages/EditProfileImg";

import Navbar from "./components/Navbar/Navbar";
import IsPrivate from "./components/IsPrivate/IsPrivate";
import IsAnon from "./components/IsAnon/IsAnon";
import CreateEpisode from "./pages/CreateEpisode/CreateEpisode";
import CreateAnime from "./pages/CreateAnime/CreateAnime";
import SeeMyAnimeList from "./pages/Anime/SeeMyAnimeList";
import ShowEpisodes from "./pages/ShowEpisodes/ShowEpisodes";
import Episode from "./pages/Episode/Episode";
import SearchPage from "./pages/SearchPage/SearchPage";
import ShowEpisodesId from "./pages/ShowEpisodeId/ShowEpisodeId";
import ShowAnime from "./components/ShowAnime/ShowAnime";
import FilterByCategoryPage from "./pages/FilterByCategoryPage/FilterByCategoryPage";
import { AuthProviderWrapper } from "./context/auth.context";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AuthProviderWrapper>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={  <ProfilePage /> } /> 
        <Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon>}/>
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/searchPage" element={<SearchPage></SearchPage> }/>
        <Route path="/createEpisode/:userId" element={<CreateEpisode></CreateEpisode>}/>
        <Route path="/searchPage" element={<SearchPage></SearchPage>}/>
        <Route path="/editProfileImg/:userId" element={<EditProfileImg></EditProfileImg>} /> 
        {<Route path="/createAnime/:userId" element={<CreateAnime></CreateAnime>} />}
        

        {/*Para probar */} 
        <Route path="/animes/:animeId" element={<ShowEpisodes></ShowEpisodes>} />
        <Route path="/episodesList" element={<ShowEpisodes></ShowEpisodes>}/>
        <Route path="/animes" element={<SeeMyAnimeList />}/>
        <Route path="/episode/:episodeId" element={<Episode/>}/>


        <Route path="/filterByCategory/" element={<FilterByCategoryPage></FilterByCategoryPage>}/>
      
        </Routes>
        </AuthProviderWrapper>
      {/* recordatori de posa Is Private a tot en lo que el redme ho posa */}
    </div>
  );
}

export default App;


//Recodatori que he tret Isprivate de Profile per poder treballari
