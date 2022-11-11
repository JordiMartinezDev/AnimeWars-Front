import { useEffect } from "react";
import './ShowComments.css';
function ShowComments({ commentText,commentUserName,userProfileImage,updateComments,commentId }) {
    
    useEffect(() => {
        
    }, [])
    
    


    return (
        <div>
            <div className="input card"  style={{width: "50%"}}>
                <img className="card-img-top" src={ userProfileImage} alt=""/>
                <div className="card-body" >
                    <h3 className="card-title">Username:{commentUserName }</h3>
                    <p className="card-text"> {commentText}</p>
            </div>
            </div> 
           
            <br></br>
        </div>

    )
}

export default ShowComments;

