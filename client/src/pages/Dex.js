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
        <div className='releases-container flex justify-center space-x-5'>

            <div className='p-6'>

                <div className='container-title rounded-lg shadow-lg bg-white max-w-sm'>
                    <h2>{pokeName}</h2>
                </div>
                

                <div className='container-body justify-center flex-wrap space-x-5'>
                    <img className='main-image' src={pokeImage} alt='pokemon'></img>
                </div>


                <div className='container-b-left flex space-x-2 justify-center'>
                    {/* <p>Abiity: {pokeAbility}?</p> */}
                </div>


                <div className='container-b-right flex space-x-2 justify-center'>
                    {/* <p>Type: {pokeType}?</p> */}
                </div>

        
            </div>
        </div>
    );
}  

export default Pokedex;
