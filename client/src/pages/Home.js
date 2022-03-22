import React, {useState, useEffect} from 'react';
import { randomize, capitalize } from '../utils/helpers';

import { useQuery } from '@apollo/client';
import { QUERY_REACTIONS } from '../utils/queries';
import ReactionList from '../components/ReactionList';

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

function Home() {
    
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

    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_REACTIONS);

    const reactions = data?.reactions || [];
    console.log(reactions);

    return (
        <main className='flex flex-wrap columns-2'>
            <div className='flex flex-wrap align-middle'>

                <ul className='pokedex-style flex flex-wrap grid-rows-4 gap-5'>
                    <li>
                        <p>{pokeName}</p>
                    </li>

                    <li>
                        <img className='main-image' src={pokeImage} alt='pokemon'></img>
                    </li>

                    <li>
                        <p>Want to learn more about {pokeName}?</p>
                    </li>

                    <li>
                        <button>Click Here!</button>
                    </li>
                </ul>
            </div>

            <div className="flex-row">
                <div className="columns-1 mb-3">
                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <ReactionList reactions={reactions} title="Some Feed for Reaction(s)..." />
                    )}
                </div>
            </div>
        </main>
    );
}  

export default Home;
