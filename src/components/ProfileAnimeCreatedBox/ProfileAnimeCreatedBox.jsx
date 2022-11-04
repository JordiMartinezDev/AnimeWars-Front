import animeAPI from "../../services/animeAPI.service";




function ProfileAnimeCreatedBox () {
    let data=[{
        nom: "One Piece",
        imgUrl:"https://uh.gsstatic.es/sfAttachPlugin/2157327.jpg"
    },
    {
        nom: "Naruto",
        imgUrl:"https://www.geekmi.news/__export/1652108985893/sites/debate/img/2022/05/09/naruto-shippuden.jpg_375108060.jpg"   
    },
    {
        nom: "DatdeBayo",
        imgUrl:"https://uh.gsstatic.es/sfAttachPlugin/2157327.jpg"
    },
    {
        nom: "Porquis",
        imgUrl:"https://www.geekmi.news/__export/1652108985893/sites/debate/img/2022/05/09/naruto-shippuden.jpg_375108060.jpg"   
    },
    {
        nom: "DeleteoQdffsdueteVEo",
        imgUrl:"https://uh.gsstatic.es/sfAttachPlugin/2157327.jpg"
    },
    {
        nom: "ad",
        imgUrl:"https://www.geekmi.news/__export/1652108985893/sites/debate/img/2022/05/09/naruto-shippuden.jpg_375108060.jpg"   
    },
    {
        nom: "bbb",
        imgUrl:"https://uh.gsstatic.es/sfAttachPlugin/2157327.jpg"
    },
    {
        nom: "aaaa",
        imgUrl:"https://www.geekmi.news/__export/1652108985893/sites/debate/img/2022/05/09/naruto-shippuden.jpg_375108060.jpg"   
    }
    ];
    let randomSelect = Math.floor(Math.random()*data.length);
    let dataView = data.slice(0,4);
    
    
   

    console.log ("dades :")
    return (
        <div>
            <h1>Hola desde component ProfileAnimeCreatedBox</h1>
            {dataView.map(result =>{
                return (
                    <div>
                        <img src= {result.imgUrl} alt="Foto Anime" />
                        <p>{result.nom}</p>
                    </div>
                )
            })}

        </div>
        

    );
}

export default ProfileAnimeCreatedBox;