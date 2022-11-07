import { useEffect, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import animeAPI from '../../services/animeAPI.service';


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
            <h1>Search Bar here</h1>
            <form>
                <div className='search-wrapper'>
                    <div className="form-group">
                        <input className='form-control' type="text" placeholder='Search..' value={key} onChange={e => setKey(e.target.value)} />
                    </div>
                    {searchResult.map(anime => {
                        return (
                            <div>
                                <Link to={"/animes/" + anime._id}>
                            <img src={anime.animeImage} name='animeImage' alt="anime" width={150} >
                             
                                    </img>
                                    </Link>   
                            </div>
                        )
                        
                        // IMAGES AND LINKS TO EACH ANIME'S PAGE

                    })}
                </div>
            </form>
        </div>
    )
}

export default SearchBar;