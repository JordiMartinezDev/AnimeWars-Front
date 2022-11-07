import {Link} from 'react-router-dom';

function ShowEpisode(props) {
    const {episode} = props;
    return (
        <div class="col">
        <div class="card-group">
        <div class="card">
        <img src={episode.episodeImg} className="card-img-top" alt={episode.name} />
        <div className="card-body">
            <h5 className="card-title">Name: {episode.name}</h5>
            {/* <p className="card-text">Description: {anime.description}</p>
            <p className="card-text">Genre: {anime.category}</p>
            <p className="card-text">{anime.episodes}</p> */}
        </div>
        </div>
        </div>
        </div>
    );
}

export default ShowEpisode;