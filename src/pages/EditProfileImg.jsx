import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';

function EditProfileImg() {
  return (
    <div>
      <p>Hola desde el component/page EditProfileImg</p>
      <p>Aqui posem editar img de perfil i la img del background de perfil</p>
      
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label"> Episode Image </label>
        <input type="file" onChange=""  />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label"> Episode Image </label>
        <input type="file" onChange=""  />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label" > User Name </label>
        <input type="text" className="form-control" id="exampleInputEmail1" onChange="" value=""/>
      </div>
      
      
      

    </div>
  );
}

export default EditProfileImg;


