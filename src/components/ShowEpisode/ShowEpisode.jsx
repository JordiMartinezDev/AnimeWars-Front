import {Link} from 'react-router-dom';

function ShowEpisode(props) {
    const {episode,uploadedByUser,handleDelete} = props;

    function handleDelete2() {
        handleDelete(episode._id)
    }
    return (
        <div className="col">
        <div className="card-group">
        <div className="fondoCard card w-100">
        <Link to={"/episode/" + episode._id}>
        {console.log("AQUI AUN TENEMOS EL ID",episode._id)}
        
        <img src={episode.episodeImg} className="card-img-top" alt={episode.name} />
        </Link>
                    {(uploadedByUser === true && <button className="btn btn-danger" onClick={handleDelete2}>Delete</button>) }

        <div className="textoLink card-body">
            <h5 className="card-title textoLink">Anime: {episode.anime}</h5>
            <h5 className="card-title textoLink">Episode {episode.number}</h5>
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


