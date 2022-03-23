import React, {useState, useEffect} from 'react';
import { randomize, capitalize } from '../utils/helpers';
import { useParams } from 'react-router-dom';


import { useQuery } from '@apollo/client';
import ReactionList from '../components/ReactionList';
import { QUERY_REACTIONS, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
import FriendList from '../components/FriendList';
import ReactionForm from '../components/ReactionForm';



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

    const loggedIn = Auth.loggedIn();
    
    const [pokeImage, setPokeImage] = useState([]);
    const [pokeName, setPokeName] = useState([]);

    const [pokeImage2, setPokeImage2] = useState([]);
    const [pokeName2, setPokeName2] = useState([]);

    const [pokeImage3, setPokeImage3] = useState([]);
    const [pokeName3, setPokeName3] = useState([]);

    

    // choose a random number out of total existing pokemon
    const randomNumber1 = randomize(1100)
    const randomNumber2 = randomize(1100)
    const randomNumber3 = randomize(1100)


    // variables set up to use api
        // return a single pokemon
        // offset count from zero by the random number chosen above
    const gqlVariables = {
        limit: 1,
        offset: randomNumber1,
    };

    // fetch request to pull pokemon image
    useEffect(() => {
        fetch('https://graphql-pokeapi.graphcdn.app/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: GET_POKEMON_QUERY, variables: gqlVariables }),
        })
        .then(response => response.json())
        .then(data => setPokeImage2(data.data.pokemons.results[0].image))
    },[])

    // fetch request to pull pokemon image
    useEffect(() => {
        fetch('https://graphql-pokeapi.graphcdn.app/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: GET_POKEMON_QUERY, variables: gqlVariables }),
        })
        .then(response => response.json())
        .then(data => setPokeName2(data.data.pokemons.results[0].name))
    },[])

    // variables set up to use api
        // return a single pokemon (2nd)
        // offset count from zero by the random number chosen above
        const gqlVariables2 = {
            limit: 1,
            offset: randomNumber2,
        };

     // fetch request to pull pokemon image 2
     useEffect(() => {
        fetch('https://graphql-pokeapi.graphcdn.app/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: GET_POKEMON_QUERY, variables: gqlVariables2 }),
        })
        .then(response => response.json())
        .then(data => setPokeImage3(data.data.pokemons.results[0].image))
    },[])

    // fetch request to pull pokemon image 2
    useEffect(() => {
        fetch('https://graphql-pokeapi.graphcdn.app/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: GET_POKEMON_QUERY, variables: gqlVariables2 }),
        })
        .then(response => response.json())
        .then(data => setPokeName3(data.data.pokemons.results[0].name))
    },[])



    // variables set up to use api
        // return a single pokemon (3rd)
        // offset count from zero by the random number chosen above
        const gqlVariables3 = {
            limit: 1,
            offset: randomNumber3,
        };

     // fetch request to pull pokemon image 3
     useEffect(() => {
        fetch('https://graphql-pokeapi.graphcdn.app/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: GET_POKEMON_QUERY, variables: gqlVariables3 }),
        })
        .then(response => response.json())
        .then(data => setPokeImage(data.data.pokemons.results[0].image))
    },[])

    // fetch request to pull pokemon image 3
    useEffect(() => {
        fetch('https://graphql-pokeapi.graphcdn.app/', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query: GET_POKEMON_QUERY, variables: gqlVariables3 }),
        })
        .then(response => response.json())
        .then(data => setPokeName(data.data.pokemons.results[0].name))
    },[])


    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_REACTIONS);

    const reactions = data?.reactions || [];
    console.log(reactions);

    // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
    const { data: userData } = useQuery(QUERY_ME_BASIC);

    return (
        <main className='min-h-screen items-center align-items-center'>

            <div className='flex flex-wrap justify-around text-center'>

                <div className='pokemon-container flex justify-center space-x-5 m-5'>

                    <div className="rounded-lg shadow-lg max-w-sm card-bottom justify-center">

                        <p className='p-2'>{pokeName}</p>

                        <img className='' src={pokeImage} alt='pokemon'></img>

                        <div className='p-6'>

                            <p>Want to learn more about {pokeName}?</p>

                            <button type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out ">
                                <a href="https://www.serebii.net/pokedex-swsh/" className='text-yellow-500'>
                                    Click Here!
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='pokemon-container2 flex justify-center space-x-5 m-5'>

                    <div className="rounded-lg shadow-lg max-w-sm card-bottom justify-center">

                        <p className='p-2'>{pokeName2}</p>

                        <img className='' src={pokeImage2} alt='pokemon'></img>

                        <div className='p-6'>

                            <p>Want to learn more about {pokeName2}?</p>

                            <button type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out ">
                                <a href="https://www.serebii.net/pokedex-swsh/" className='text-yellow-500'>
                                    Click Here!
                                </a>
                            </button>
                        </div>
                    </div>
                </div>

                <div className='pokemon-container flex justify-center space-x-5 m-5'>

                    <div className="rounded-lg shadow-lg max-w-sm card-bottom justify-center">

                        <p className='p-2'>{pokeName3}</p>

                        <img className='' src={pokeImage3} alt='pokemon'></img>

                        <div className='p-6'>

                            <p>Want to learn more about {pokeName3}?</p>

                            <button type="button" className="inline-block px-6 py-2.5 bg-gray-800 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg transition duration-150 ease-in-out ">
                                <a href="https://www.serebii.net/pokedex-swsh/" className='text-yellow-500'>
                                    Click Here!
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="flex flex-wrap justify-evenly text-center">
                <div className="flex justify-center space-x-5 ">
                    <div className="rounded-lg shadow-lg max-w-lg card-bottom justify-center bg-scroll max-h-100">

                        <div className={`columns-2 mb-3 ${loggedIn && 'columns-lg'}`}>
                            {loading ? (
                                <div>Loading...</div>
                            ) : (
                                <ReactionList reactions={reactions} title="Here is what everyone is saying..." />
                            )}
                        </div>
                        {loggedIn && userData ? (
                        <div className="border text-red-300">
                            <FriendList
                            username={userData.me.username}
                            friendCount={userData.me.friendCount}
                            friends={userData.me.friends}
                            />
                        </div>
                        ) : null}
                    </div>

                    <div className=''>
                    {loggedIn && (
                        <div className="m-5">
                            <ReactionForm />
                        </div>
                    )}

                    <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}></div>
                </div>
            </div>
                <div className="mb-3">{!useParams && <ReactionForm />}</div>
            </div>
        </main>
    );
}  

export default Home;
