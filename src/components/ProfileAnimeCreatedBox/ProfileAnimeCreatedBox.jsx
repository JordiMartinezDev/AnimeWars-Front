import animeAPI from "../../services/animeAPI.service";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import './ProfileAnimeCreatedBox.css';




function ProfileAnimeCreatedBox () {
    
    // let randomSelect = Math.floor(Math.random()*data.length);
    // let dataView = data.slice(0,4);
    
    
   

    console.log ("dades :")
    return (
        <div>
            <h1>Hola desde component ProfileAnimeCreatedBox</h1>
            <div className="card" >
                <img src="..." class="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div>
            

        </div>
        

    );
}

export default ProfileAnimeCreatedBox;