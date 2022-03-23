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
            <div className='releases-container flex justify-center'>
            <h1 id="releases" className="release-page-title flex flex-wrap space-x-5">Upcoming Game Releases</h1>
            <div className='rounded-lg shadow-lg bg-white max-w-sm'>
                <img className='future-date-image rounded-t-lg' src={pokeImage} alt='pokemon'></img>
                

                <div className='p-6'>
                    <div className=''>    
                        <li>
                            <h3>{pokeName}</h3>
                        </li>
                                <li>
                                    <p>{releaseDate}</p>
                                </li>
                            </div>
                            <div className='grid-rows-1'>
                                <li>
                                    <button className='rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>Click Here!</button>
                                </li>
                            </div>
                        </div>

                    </div>
                </div>

        </div>
        
        
    );

}

export default ReleaseDates;
