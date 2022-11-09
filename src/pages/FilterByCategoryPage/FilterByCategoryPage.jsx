import animeAPI from "../../services/animeAPI.service";
import { useState } from 'react'
import { useEffect} from 'react'
import { useParams } from 'react-router-dom'
import SearchBar from "../../components/SearchBar/SearchBar";
import ShowAnime from "../../components/ShowAnime/ShowAnime";


function FilterByCategoryPage(){
    const [filt, setFilt] = useState([])
    const {category} = useParams();
    const [animeArray,setAnimeArray] = useState([])

    useEffect(() => {
        animeAPI.getAnimes()
        .then(results => {
            //setFilt(results.data);
            console.log(" Result GetAnimes() de FilterByCategory :  ", results.data)
            setAnimeArray(results.data.filter(anime => anime.category === category))
            console.log("ANIME ARRAY", animeArray)
        })
    }, []);

// function ShonenHandler(){
//     filt.filter((anime) => {
//         if(anime.category === "Shonen"){
//             console.log("ANIME SHONEN",anime)
//             return anime
//         }
//     })








    return(
        <div>
            {/* <button onClick={ShonenHandler}>Shonen</button> */}
            {animeArray.map(anime => <ShowAnime anime={anime} key={anime._id}/>)}
        </div>
    );

}


export default FilterByCategoryPage;