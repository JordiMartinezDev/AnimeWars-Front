import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

function CreateEpisode() {
    return (
        <div>
            <h1> Create Episode Form Page</h1> 
            <form method="POST" action="/createEpisode">
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Anime Name</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Link</label>
                    <input type="text" className="form-control" id="exampleInputEmail1"/>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Num Episode</label>
                    <input type="number" className="form-control" id="exampleInputEmail1"/>
                </div>
                
                <button type="submit" className="btn btn-primary">Submit</button>
            </form> 
        </div>
    )
}

export default CreateEpisode;