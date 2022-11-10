import { useEffect } from "react";

function ShowComments({ comment }) {
    
    useEffect(() => {
        
    },[])


    return (
        <div>
            {console.log("SHOWCOMMENT COMPONENT, PROP: ", comment)}

        </div>
    )
}

export default ShowComments;