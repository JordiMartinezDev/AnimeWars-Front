import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import animeAPI from '../../services/animeAPI.service'

function Episode() {
    const [episode, setEpisode] = useState([]);
    const {episodeId} = useParams();
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
        </div>
        
    )
}

export default Episode;


//para el reproductor 
//npm install react-player --save
//yarn add react-player


