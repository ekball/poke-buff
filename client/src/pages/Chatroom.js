import React from 'react';
import { useParams } from 'react-router-dom';

import { useQuery } from '@apollo/client';
import ReactionList from '../components/ReactionList';
import { QUERY_REACTIONS, QUERY_ME_BASIC } from '../utils/queries';
import Auth from '../utils/auth';
import FriendList from '../components/FriendList';
import ReactionForm from '../components/ReactionForm';

const Chatroom = () => {
    const loggedIn = Auth.loggedIn();
    
    // use useQuery hook to make query request
    const { loading, data } = useQuery(QUERY_REACTIONS);

    const reactions = data?.reactions || [];
    console.log(reactions);

    // use object destructuring to extract `data` from the `useQuery` Hook's response and rename it `userData` to be more descriptive
    const { data: userData } = useQuery(QUERY_ME_BASIC);

    return (
   
    <main className='flex flex-wrap text-center justify-center'>

                <div className="flex-row justify-center text-center w-fit">
                    {loggedIn && (
                        <div className="col-12 mb-3">
                            <ReactionForm />
                        </div>
                    )}
                    <div className={`col-12 mb-3 ${loggedIn && 'col-lg-8'}`}></div>

                    <div className="flex justify-center space-x-5">    
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
                    </div>
                <div className="mb-3">{!useParams && <ReactionForm />}</div>
            </div>
        </main>
    );
};

export default Chatroom;
