import React, {useState, useEffect} from 'react';
const GET_RELEASE_QUERY = `query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
        id
        slug
        released
    }
}`;



function ReleaseDates() {

    const [releaseDate, setReleaseDate] = useState([]);
    const [pokeName, setPokeName] = useState([]);
    const [pokeImage, setPokeImage] = useState([]);


    // fetch request to pull first upcoming release date
    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=f52b825c062a4dac83a3a8a902cb7df8&search=pokemon&platforms=7', {
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
            },
        })
        .then(response => response.json())
        .then(data => setReleaseDate(data.results[8].released))
    },[])


    // fetch request to pull image for future release above
    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=f52b825c062a4dac83a3a8a902cb7df8&search=pokemon&platforms=7', {
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
            },
        })
        .then(response => response.json())
        .then(data => setPokeImage(data.results[8].background_image))
    },[])


    // fetch request to pull name for future release above
    useEffect(() => {
        fetch('https://api.rawg.io/api/games?key=f52b825c062a4dac83a3a8a902cb7df8&search=pokemon&platforms=7', {
            method: 'GET',
            headers: {
                'Accept': 'application/json', 
            },
        })
        .then(response => response.json())
        .then(data => setPokeName(data.results[8].name))
},[])



return (
    <div>
        <div>
            <h1 id="releases" className="release-page-title flex justify-center flex-wrap space-x-5">Upcoming Game Releases</h1>
                </div>
                    <div className='releases-container flex justify-center space-x-5'>


                        <div className="rounded-lg shadow-lg bg-white max-w-sm">
            
                            <img className='rounded-t-lg future-date-image' src={pokeImage} alt='pokemon'></img>
                            
                        <div className='p-6'>


                        <div className='justify-center flex-wrap space-x-5'>    
                                
                            <h3>{pokeName}</h3>
                                
                            <p>{releaseDate}</p>
                                
                        </div>


                        <div class="flex space-x-2 justify-center">

                        <button type="button" class="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out">Click Me</button>
                            
                        </div>


                    </div>
                </div>
            </div>
        </div>
    );
}   

export default ReleaseDates;
