import {Link} from 'react-router-dom';

function ShowEpisode(props) {
    const {episode} = props;

    return (
        <div className="col">
        <div className="card-group">
        <div className="card">
        <Link to={"/episode/" + episode._id}>
        {console.log("AQUI AUN TENEMOS EL ID",episode._id)}

        <img src={episode.episodeImg} className="card-img-top" alt={episode.name} />

        </Link>

        <div className="card-body">
            <h5 className="card-title">Anime: {episode.anime}</h5>
            <h5 className="card-title">Episode number: {episode.number}</h5>
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


