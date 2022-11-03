import {Link} from 'react-router-dom';

function ShowAnime({anime}) {
    return (
        <div>
            <Link to={`/episode/${anime._id}`}>
                <img src={anime.image} alt={anime.title} />
                <h2>{anime.title}</h2>
            </Link>
        </div>
    );
}

export default ShowAnime;
