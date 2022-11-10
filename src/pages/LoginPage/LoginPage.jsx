import "./LoginPage.css";
import { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/auth.context";
import authService from "../../services/auth.service";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const { storeToken, authenticateUser } = useContext(AuthContext);

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    const requestBody = { email, password };

    // Send a request to the server using axios
    /* 
    axios.post(`${process.env.REACT_APP_SERVER_URL}/auth/login`)
      .then((response) => {})
    */

    // Or using a service
    authService
      .login(requestBody)
      .then((response) => {
        // If the POST request is successful store the authentication token,
        // after the token is stored authenticate the user
        // and at last navigate to the home page
        storeToken(response.data.authToken);
        authenticateUser();
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="LoginPage">
      <h1 className="text-white">Login</h1>
      <br></br>
      <form onSubmit={handleLoginSubmit}>
      <div class="mb-3 text-white" >
        <label for="exampleInputEmail1" class="form-label">Email:</label>
        <input type="email" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={handleEmail} />
      </div>
      <div class="mb-3 text-white">
        <label for="exampleInputPassword1" class="form-label">Password:</label>
        <input type="password" id="exampleInputPassword1" name="password" value={password} onChange={handlePassword}/>
      </div>
        <button class="btn btn-primary" type="submit">Login</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div id="emailHelp" class="form-text text-white">Don't have an account yet?</div>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
  );
}

export default LoginPage;

