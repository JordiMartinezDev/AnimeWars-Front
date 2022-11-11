import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import ShowComments from '../../components/ShowComments/ShowComments';
import { AuthContext } from '../../context/auth.context';
import animeAPI from '../../services/animeAPI.service'

function Episode() {
    const [episode, setEpisode] = useState([]);
    const { episodeId } = useParams();
    const [newComment, setNewComment] = useState();
    const { params } = useParams();
    const { user } = useContext(AuthContext)
    const [commentsArray, setCommentsArray] = useState([]);

    // const [playing, setPlaying] = React.useState(false)
   
    useEffect(() => {
        console.log("EPISODE", episodeId)
        updateComments()

    }, [])
    
    useEffect(() => {
        console.log("hello")
    },[commentsArray])
    function submitComment(e) {
        //push comment to DB
        e.preventDefault();
        
        
        const uploadData = new FormData();
        uploadData.append("episode", episodeId)
        uploadData.append("newComment", newComment)
       


        const uploadComment = {
            episodeId: episodeId,
            newComment: newComment,
            user: user,
        }
        animeAPI.addComment(uploadComment)
                .then(results => {
                    console.log("aaaaa: ", results.data)
                    updateComments();
                    
                })
                .catch(err => {
                    console.log("Error CreateEpisode.JSX --> : ", err);
                })
    }
    function handleComment(e) {

        setNewComment(e.target.value)
        
    }
    function updateComments() {
        animeAPI.getEpisode(episodeId)
        .then(results => {
            setEpisode(results.data);
            console.log("RESULTS.DATA AFTER POPULATE: ", results.data)
            setCommentsArray(results.data.commentId)
        })
        .catch((err) => {
            console.log(err);
        })
    }

    

    return (
        <div>
        <br></br>
            <h1 className='text-white'>Video</h1>
            <br></br>
            <ReactPlayer
            url={episode.episodeUrl}
            width="100%"
            height="500px"
            playing
            // playIcon={<button>Play</button>}
            light="https://i.stack.imgur.com/zw9Iz.png"
            />


            <br></br><br></br>
            <h1 className='text-white'>Comments</h1>

            {/* {episode.commentId?
            episode.commentId.map(comment => {
                <ShowComments comment={comment.text} key={ comment}></ShowComments>
            {console.log("EPISODE COMMENT -> ", episode.commentId)}
                
            }) : <ShowComments comment={episodeId}></ShowComments>} */}

            <h3>{(commentsArray?.length > 0) && commentsArray?.map(comment => {
                {
                    console.log("COMMENTBYUSEROBJ:  ",comment.commentByUser)
                }
                return <ShowComments commentText={comment.text} commentUserName={comment?.commentByUser[0].username} userProfileImage={comment?.commentByUser[0].profileImg }></ShowComments>
            }) }
            </h3>
            <br></br>

            <form onSubmit={submitComment}>

            <textarea onChange={handleComment} id="exampleFormControlTextArea" rows="3" value={newComment} placeholder="Write comment..." style={{width: "40%"}}/>
            <button type="submit" className="btn btn-primary">Comment</button>
            <br></br>
            </form>
            <br></br><br></br><br></br>
        </div>
        
    )
}

export default Episode;


//para el reproductor 
//npm install react-player --save
//yarn add react-player


