import React, {useState, useEffect} from 'react';
import { randomize } from '../utils/helpers';

const GET_POKEMON_QUERY = `query pokemons($limit: Int, $offset: Int) {
            pokemons(limit: $limit, offset: $offset) {
                count
                results {
                    url
                    name
                    image
                }
            }
          }`;

function Pokedex() {
    
    const [pokeImage, setPokeImage] = useState([]);
    const [pokeName, setPokeName] = useState([]);

    // choose a random number out of total existing pokemon
    const randomNumber = randomize(1100)

    // variables set up to use api
        // return a single pokemon
        // offset count from zero by the random number chosen above
    const gqlVariables = {
        limit: 1,
        offset: randomNumber,
    };

    // fetch request to pull pokemon image
    useEffect(() => {
        fetch('https://graphql-pokeapi.graphcdn.app/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: GET_POKEMON_QUERY, variables: gqlVariables }),
        })
        .then(response => response.json())
        .then(data => setPokeImage(data.data.pokemons.results[0].image))
    },[])

    // fetch request to pull pokemon image
    useEffect(() => {
        fetch('https://graphql-pokeapi.graphcdn.app/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: GET_POKEMON_QUERY, variables: gqlVariables }),
        })
        .then(response => response.json())
        .then(data => setPokeName(data.data.pokemons.results[0].name))
    },[])


    // // fetch request to pull pokemon type
    // useEffect(() => {
    //     fetch('https://graphql-pokeapi.graphcdn.app/', {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ query: GET_POKEMON_QUERY, variables: gqlVariables }),
    //     })
    //     .then(response => response.json())
    //     .then(data => setPokeName(data.data.pokemons.results[0].name))
    // },[])

    // // fetch request to pull pokemon ability
    // useEffect(() => {
    //     fetch('https://graphql-pokeapi.graphcdn.app/', {
    //         method: "POST",
    //         headers: { 'Content-Type': 'application/json' },
    //         body: JSON.stringify({ query: GET_POKEMON_QUERY, variables: gqlVariables }),
    //     })
    //     .then(response => response.json())
    //     .then(data => setPokeAbility(data.data.ability.params.ability))
    // },[])

    return (
        <div>
            <div>
                <h1 id="releases" className="text-xl release-page-title flex flex-wrap justify-center break-after">Gotta catch 'em all!</h1>
            </div>
            <div class="flex justify-center">
                <div className='releases-container rounded-lg shadow-lg bg-white max-w-md justify-center'>
                    <img className='future-date-image rounded-t-lg' src={pokeImage} alt='pokemon'></img>
                    <div class="p-6 justify-center items-center text-center">
                        <h1 class="text-xl">{pokeName}</h1>
                        <h2>Want to learn more about {pokeName}?</h2>
                        
                        <button className='rounded-md p-2 items-center justify-center text-white bg-black hover:text-slate-100 hover:bg-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>Click Here!</button>
                    </div>
                        
                </div>

            </div>
        </div>
    );
}  

export default Pokedex;
