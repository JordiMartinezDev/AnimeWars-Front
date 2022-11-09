import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import ShowComments from '../../components/ShowComments/ShowComments';
import animeAPI from '../../services/animeAPI.service'

function Episode() {
    const [episode, setEpisode] = useState([]);
    const { episodeId } = useParams();
    const { newComment, setNewComment } = useState();
    console.log(episodeId)


    // const [playing, setPlaying] = React.useState(false)
   
    useEffect(() => {
        console.log("EPISODE", episodeId)
        animeAPI.getEpisode(episodeId)
        .then(results => {
            console.log("LISTA EPISODES", results.data);
            setEpisode(results.data);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    
    function submitComment(e) {
        //push comment to DB
        e.preventDefault();
    
        
        const uploadData = new FormData();
        uploadData.append("episode", episode)
        uploadData.append("newComment", newComment)
       


        animeAPI.addComment(uploadData)
                .then(results => {
                    console.log("aaaaa: ", results.data)
                    //setComment, refresh etc
                })
                .catch(err => {
                    console.log("Error CreateEpisode.JSX --> : ", err);
                })
    }


    return (
        <div>
            <h1> One Episode Page</h1>
            {/* <p>{console.log("sdsdasdaasd", episode._id)}</p> */}
            <ReactPlayer
            url={episode.episodeUrl}
            width="100%"
            height="500px"
            playing
            // playIcon={<button>Play</button>}
            light="https://i.stack.imgur.com/zw9Iz.png"
            />

            <h2> Comments </h2>
            {(episode.commentId)?
            episode.commentId.map(comment => {
                <ShowComments comment={comment} key={ comment._id}></ShowComments>
                
            }) : <div></div>}

            <form onSubmit={submitComment}>

            <textarea id="exampleFormControlTextArea" rows="3"/>

            <button type="submit" className="btn btn-primary">Comment</button>
                
            </form>
        </div>
        
    )
}

export default Episode;


//para el reproductor 
//npm install react-player --save
//yarn add react-player


