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


// return(
//     <div className="card col-3 m-3">
//         <img src={apartment.img} className="card-img-top" alt={apartment.title} />
//         <div className="card-body">
//             <h5 className="card-title">{apartment.title}</h5>
//             <p className="card-text">{apartment.pricePerDay} €/day</p>
//             <Link to={"/"+apartment._id}>View details</Link>
//         </div>
//     </div>
// );