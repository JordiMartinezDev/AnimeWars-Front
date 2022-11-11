import "./SignupPage.css";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../services/auth.service";
// Fins
function SignupPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");
  
  const [errorMessage, setErrorMessage] = useState(undefined);

  const navigate = useNavigate();

  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
  const handleUserName = (e) => setUserName(e.target.value);
 
  

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the request body
    const requestBody = { email, password, username };

    // Send a request to the server using axios
    /* 
    const authToken = localStorage.getItem("authToken");
    axios.post(
      `${process.env.REACT_APP_SERVER_URL}/auth/signup`, 
      requestBody, 
      { headers: { Authorization: `Bearer ${authToken}` },
    })
    .then((response) => {})
    */

    // Or using a service
    authService
      .signup(requestBody)
      .then((response) => {
        // If the POST request is successful redirect to the login page
        navigate("/");
      })
      .catch((error) => {
        // If the request resolves with an error, set the error message in the state
        const errorDescription = error.response.data.message;
        setErrorMessage(errorDescription);
      });
  };

  return (
    <div className="SignupPage">
    <br></br><br></br>
    <br></br><br></br>
      <h1 className="text-white">Sign Up</h1>
      <br></br>
      <form onSubmit={handleSignupSubmit}>
      <div className="mb-3 text-white" >
        <label for="exampleInputEmail1" className="form-label">Email address :</label>
        <input type="email" /*class="form-control"*/ id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={email} onChange={handleEmail} style={{width: "40%"}}/>
        <div id="emailHelp" className="form-text text-white">We'll never share your email with anyone else.</div>
      </div>
      <div className="mb-3 text-white">
        <label for="exampleInputPassword1" className="form-label">Password:</label>
        <input type="password" /*class="form-control"*/ id="exampleInputPassword1" name="password" value={password} onChange={handlePassword} style={{width: "40%"}}/>
      </div>
      <div className="mb-3 form-check text-white"> 
        <label className="form-check-label text-white" for="exampleCheck1">Userame: </label>
        <input type="text" name="username" value={username} onChange={handleUserName} style={{width: "40%"}} />
        </div>
        <button className="btn btn-primary" type="submit">Sign Up</button>
      </form>
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      <div id="emailHelp" className="form-text text-white">Already have account?</div>
      <Link to={"/login"}> Login</Link>
    </div>
  );
}

export default SignupPage;


