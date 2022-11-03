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
import Loading from "./components/Loading/Loading";
import CreateEpisode from "./pages/CreateEpisode/CreateEpisode";

function App() {
  return (
    <div className="App">
      <Navbar />
      
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={ <IsPrivate> <ProfilePage /> </IsPrivate>} />
        <Route path="/signup" element={ <IsAnon> <SignupPage /> </IsAnon>}/>
        <Route path="/login" element={<IsAnon> <LoginPage /> </IsAnon>} />
        <Route path="/createEpisode/:userId" element={<CreateEpisode></CreateEpisode>}/>
        <Route path="/editProfileImg/:userId" element={<EditProfileImg></EditProfileImg>}/> 
        <Route path="/*" element={<NotFoundPage></NotFoundPage>} />

      </Routes>
      {/* recordatori de posa Is Private a tot en lo que el redme ho posa */}
    </div>
  );
}

export default App;
