import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import animeAPI from '../../services/animeAPI.service';
import ShowAnime from '../ShowAnime/ShowAnime';
import "./SearchBar.css"


function SearchBar() {

    const [searchResult, setSearchResult] = useState([])
    const [key, setKey] = useState("")
    const [animesArray, setAnimesArray] = useState([])
    

    useEffect(() => {

        {
            if (!key.trim()) {
                setSearchResult([])
                return
            }
            console.log("Key is : ", key)
            animeAPI.getAnimes().then(result => {
                console.log("HELLO RESult")
                setAnimesArray(result.data)

                const clonedAnimeArr = [];
                animesArray.map(anime => {

                    
                    const newKey = key.toLocaleLowerCase();
                    const newAnimeName = anime.name.toLocaleLowerCase();
                    
                    if (newAnimeName.search(newKey) != -1 || newKey =="all") {
                        console.log("Coincideix: ", anime.name);
                        clonedAnimeArr.push(anime)
                        
                        setSearchResult(clonedAnimeArr)
                    }
                });
                console.log("SearchResult: ",searchResult)
                

            })
            
            
                .catch(err => {
                 console.log(err)
                });
        }
        

    }, [key])
   
    function handleSearchChange() {
        
    }

    return (
        <div>
        <br></br>
            <h1 className="text-white">Search Bar</h1>
            <br></br>
            <br></br>
            <form>
                <div className='search-wrapper'>
                    <div className="form-group">
                        <input className='input form-control' type="text" placeholder='Search..' value={key} onChange={e => setKey(e.target.value)} style={{width: "50%"}} />
                    </div>
                    <br></br>
                    {searchResult.map(anime => {
                        return (
                            
                            <Link key={ anime._id} to={"/animes/" + anime._id}>
                            {/* <Link to={<ShowAnime anime={anime} ></ShowAnime>}>  */}
                                <img src={anime.animeImage} name='animeImage' alt="anime" width={150}/>
                                
                            </Link>   
                            
                        )
                        
                        // IMAGES AND LINKS TO EACH ANIME'S PAGE

                        

                    })}
                </div>
            </form>
        </div>
    )
}

export default SearchBar;

