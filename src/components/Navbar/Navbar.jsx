import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

//bootstrap

function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);

  return (
    // <nav>
    //   <Link to="/">
    //     <button>Home</button>
    //   </Link>

    //   {isLoggedIn && (
    //     <>
    //       <button onClick={logOutUser}>Logout</button>

    //       <Link to="/profile">
    //         <button>Profile</button>
    //         {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
    //       </Link>

    //       <span>{user && user.name}</span>
    //     </>
    //   )}

    //   {!isLoggedIn && (
    //     <>
    //       <Link to="/signup">
    //         {" "}
    //         <button>Sign Up</button>{" "}
    //       </Link>
    //       <Link to="/login">
    //         {" "}
    //         <button>Login</button>{" "}
    //       </Link>
    //     </>
    //   )}
    // </nav>


  <nav className="navbar navbar-expand-lg navbar-darkt bg-dark">
  <div className="container-fluid">
    
    <a className="text-danger navbar-brand">
    <Link className="link" to="/">AnimeWars</Link>
    </a>

    <button className="text-white navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
      <span className="text-white navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarScroll">
      <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" /*style={{"--bs-scroll-height: "100px"}}*/>
        <li className="nav-item">
          <a className=" text-white bg-dark nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="text-white bg-dark nav-link" href="#">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="text-white nav-link dropdown-toggle" href="#" id="navbarScrollingDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Explore
          </a>
          <ul className="text-white bg-dark dropdown-menu" aria-labelledby="navbarScrollingDropdown">
            <li><a className="text-white bg-dark dropdown-item" href="#">Action</a></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Adventure</a></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Comedy</a></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Drama</a></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Fantasy</a></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Music</a></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Mystery</a></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Romance</a></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Sci-Fi</a></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Slice of Life</a></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Sports</a></li>
            <li><hr className="text-white bg-dark dropdown-divider"/></li>
            <li><a className="text-white bg-dark dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="text-white nav-item">
          <a className="text-white bg-dark nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Profile</a>
        </li>
      </ul>
      <form className="text-white d-flex">
        <input className="text-white form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="text-white btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
  
    );
    

}

export default Navbar;
