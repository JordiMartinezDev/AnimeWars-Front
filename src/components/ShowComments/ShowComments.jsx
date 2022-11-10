import { useEffect } from "react";

function ShowComments({ commentText,commentUserName,userProfileImage,updateComments,commentId }) {
    
    useEffect(() => {
        
    }, [])
    
    


    return (
        <div>
            <div className="card" /*style="width: 18rem;"*/>
                <img className="card-img-top" src={ userProfileImage}/>
                <div className="card-body">
                    <h3 className="card-title">{commentUserName }</h3>
                    <h8 className="card-text"> {commentText}</h8>
    
            </div>
            </div> 
           

        </div>
    )
}

export default ShowComments;

