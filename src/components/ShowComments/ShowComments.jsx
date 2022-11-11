import { useEffect } from "react";
import './ShowComments.css';
function ShowComments({ commentText,commentUserName,userProfileImage,updateComments,commentId }) {
    
    useEffect(() => {
        
    }, [])
    
    


    return (
        <div className="cajaComentario">
            <div className="input card"  style={{width: "50%"}}>
                {/* <img className="card-img-top" src={ userProfileImage} alt=""/> */}
                <div className="card-body" >
                    <h3 className="h3 card-title">{commentUserName }:</h3>
                    <p className="comentario card-text"> {commentText}</p>
            </div>
            </div> 
           
            <br></br>
        </div>

    )
}

export default ShowComments;

