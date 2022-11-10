import animeAPI from "../../services/animeAPI.service";
import { useState } from 'react'
import { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import SearchBar from "../../components/SearchBar/SearchBar";
import ShowAnime from "../../components/ShowAnime/ShowAnime";


function FilterByCategoryPage(){
    // const [filt, setFilt] = useState([])
    const {category} = useParams();
    const [animeArray,setAnimeArray] = useState([])

    useEffect(() => {
        // console.log("ENTRA AQUI");
        animeAPI.getAnimes()
        .then(results => {
            const filteredAnimes = results.data.filter(anime => anime.category === category)
            //setFilt(results.data);
            //console.log(" Result GetAnimes() de FilterByCategory :  ", results.data)
            setAnimeArray(filteredAnimes)
            // console.log("ANIME ARRAY: ", animeArray);
        })
        .catch((err) => {
            console.log(err);
        
        })
        }, [category]);

// function ShonenHandler(){
//     filt.filter((anime) => {
//         if(anime.category === "Shonen"){
//             console.log("ANIME SHONEN",anime)
//             return anime
//         }
//     })


    // return(
        // <div>
        //     {/* <button onClick={ShonenHandler}>Shonen</button> */}
        //     {animeArray.map(anime => <ShowAnime anime={anime} key={anime._id}/>)}
        // </div>
    // );

    return (
        <div className="container text-center">
        <h1>Filter by category</h1>
        <div className="row row-cols-5">
               {/* //Aqui haremos un map de los animes que el usuario tenga en su lista
        //y los mostraremos en una card(lo de la card hacerlo con bootstrap en ShowAnime.jsx)) */}
            {/* {console.log("ANIMES ENTRA AQUI??", animeArray)} */}
         {animeArray.map(anime => {         
            return (
                <div key={anime._id}>
                {<p>{anime.name}</p>}

                     {/* <ShowAnime anime={anime}></ShowAnime> */}
                
                </div>

                );
            })
        }
        </div>
        </div>
    );






}



export default FilterByCategoryPage;