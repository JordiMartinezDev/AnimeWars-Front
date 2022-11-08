import {Link} from 'react-router-dom';
import React from 'react';
<<<<<<< HEAD
import { useParams} from 'react'
=======
import { useParams } from 'react-router-dom'


function ShowAnime() {
    const {animeId} = useParams()
    // const {anime} = props;


>>>>>>> jordi

    return (
        <>
            {console.log(animeId)}
            {true ? <button> Liked</button>:<button>Not Liked Yet</button>}
        </>
    );
}

export default ShowAnime;