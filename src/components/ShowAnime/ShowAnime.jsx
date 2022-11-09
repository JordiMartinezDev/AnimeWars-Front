import {Link} from 'react-router-dom';
import React from 'react';
import { useParams} from 'react'

function ShowAnime(props) {
    // const [animeId] = useParams()
    
    const {anime} = props;
    return (
        <div class="col">
        <div class="card-group">
        <div class="card">
        <img src={anime.animeImage} className="card-img-top" alt={anime.name} />
        <div className="card-body">
            <h5 className="card-title">Name: {anime.name}</h5>
            <p className="card-text">Description: {anime.description}</p>
            <p className="card-text">Genre: {anime.category}</p>
            <p className="card-text">{anime.episodes}</p>
        </div>
        </div>
        </div>
        </div>
    );
}

export default ShowAnime;