import "./Navbar.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../context/auth.context";
import lupa from "../../assets/lupa.png";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
//bootstrap
function Navbar() {
  // Subscribe to the AuthContext to gain access to
  // the values from AuthContext.Provider's `value` prop
  const { isLoggedIn, user, logOutUser } = useContext(AuthContext);
  return (
    // <nav>
      /* <Link to="/">
        <button>Home</button>
      </Link> */
    //   {isLoggedIn && (
    //     <>
    //       <button onClick={logOutUser}>Logout</button>
    //       <Link to="/profile">
    //         <button>Profile</button>
    //         {/* <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" /> */}
    //     </Link>
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
  <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    
          <div className="container-fluid">
            
            <Link className="titlePage link text-danger navbar-brand" to="/">ANIMEWARS</Link>
          <button className="text-white navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
              <span className="text-white navbar-toggler-icon"></span>
          </button>
          
          <div className="collapse navbar-collapse" id="navbarScroll">
              <ul className="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{"--bs-scroll-height": "100px"}} >
                {/* <li className="nav-item">
                  <Link className="text-white bg-dark nav-link active" aria-current="page" to="/">Home</Link>
                </li> */}
                <li className="nav-item dropdown">
                  <p className="explore text-white bg-dark nav-link dropdown-toggle"  id="dropdownMenuButton" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Explore
                  </p>
                  <ul className="text-white bg-dark dropdown-menu" aria-labelledby="navbarScrollingDropdown">
                    <li><button className="buttonProfile"><Link to="/filterByCategory/Shonen" className="text-white bg-dark dropdown-item">Shonen</Link></button></li>
                    <li><button className="buttonProfile"><Link to="/filterByCategory/Drama" className="text-white bg-dark dropdown-item">Drama</Link></button></li>
                    <li><button className="buttonProfile"><Link to="/filterByCategory/Action" className="text-white bg-dark dropdown-item">Action</Link></button></li>
                    <li><button className="buttonProfile"><Link to="/filterByCategory/Adventure" className="text-white bg-dark dropdown-item">Adventure</Link></button></li>
                    <li><button className="buttonProfile"><Link to="/filterByCategory/Mystery" className="text-white bg-dark dropdown-item">Mystery</Link></button></li>
                    <li><button className="buttonProfile"><Link to="/filterByCategory/Romance" className="text-white bg-dark dropdown-item">Romance</Link></button></li>
                    {/* <li><hr className="text-white bg-dark dropdown-divider"/></li> */}
                  </ul>
                </li>
              </ul>
                <form className="text-white d-flex">
                    <Link className="link" to="/searchPage">
                    <img className="lupa" src={lupa} style={{ width: 40, height: 40}} alt="lupa"/>
                    </Link>
                    <div className="dropdown">
                    <button className="buttonProfile bg-dark btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      <img src="https://picsum.photos/id/402/200/300" style={{ width: 50, height: 50, borderRadius: 25}} alt="profile" />
                    </button>
                      <ul className="buttonProfile dropdown-menu text-white bg-dark dropdown-menu">
                        {isLoggedIn ?
                          <>
                          <li className="buttonProfile text-white  dropdown-item"  ><Link className="text-white  dropdown-item" to="/profile">
                                Profile
                              </Link>
                          </li>
                          <li className="buttonProfile text-white dropdown-item"><button className="buttonProfile text-white" onClick={logOutUser}>Logout</button></li>
                          <span>{user && user.name}</span>
                          </>
                         :
                        
                          <>
                            <li >
                              <Link className="dropdown-item" to="/signup">
                              {" "}<button className="buttonProfile text-white">Sign Up</button>{" "}
                              </Link>
                            </li>
                            <li>
                              <Link className="dropdown-item" to="/login">
                              {" "}<button className="buttonProfile text-white">Login</button>{" "}
                              </Link>
                            </li>
                          </>
                        }
                      </ul>
                    </div>
                </form>
                </div>
    </div> 
  </nav>
  );
}
export default Navbar;
