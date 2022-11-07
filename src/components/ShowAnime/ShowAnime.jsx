import {Link} from 'react-router-dom';

function ShowAnime(props) {
    const {anime} = props;
    console.log(anime)
    return (
        <div>
            <h1>Show Anime</h1>
            <h2>{console.log("THIS IS ANIME IN FRONT, ", anime)} { anime.name}</h2>
        </div>
    );
}

export default ShowAnime;
