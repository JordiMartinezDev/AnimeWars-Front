import {Link} from 'react-router-dom';

function ShowAnime(props) {
    const {anime} = props;
    console.log(anime)
    return (
        <div>
            <h1>Show Anime</h1>
            <h2>{anime}</h2>
        </div>
    );
}

export default ShowAnime;
