import React from 'react'
import ReactPlayer from 'react-player'

function Episode() {
    return (
        <div>
            <h1> One Episode Page</h1>
            <ReactPlayer
            url="https://vimeo.com/243556536"
            width="100%"
            height="500px"
            playing
            playIcon={<button>Play</button>}
            light="https://i.stack.imgur.com/zw9Iz.png"
            />
        </div>
        
    )
}

export default Episode;


//para el reproductor 
//npm install react-player --save
//yarn add react-player