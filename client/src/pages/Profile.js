import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import ReactionForm from '../components/ReactionForm';
import ReactionList from '../components/ReactionList';
import FriendList from '../components/FriendList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import { ADD_FRIEND } from '../utils/mutations';
import Auth from '../utils/auth';

const Profile = () => {

    const [addFriend] = useMutation(ADD_FRIEND);

    const { username: userParam } = useParams();

    const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
        variables: { username: userParam }
    });

    const user = data?.me || data?.user || {};

    // redirect to personal profile page if username is the logged-in user's
    if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
        return <Redirect to="/profile" />;
    }

    if (loading) {
        return <div>Loading...</div>;
    }

    if (!user?.username) {
        return (
          <h4>
            This page requires you to be logged in. Please log in or sign up with the link above.
          </h4>
        );
    }

    const handleClick = async () => {
        try {
          await addFriend({
            variables: { id: user._id }
          });
        } catch (e) {
          console.error(e);
        }
    };

    return (
        <div className='flex justify-around min-h-screen'>

          <div className="flex-row justify-center">
            <h2 className="m-5">
              Welcome to {userParam ? `${user.username}'s` : 'your'} profile.
            </h2>
            {userParam && (
              <button className="flex justify-center px-6 py-2.5 bg-gray-800 text-yellow-500 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-gray-900 hover:shadow-lg focus:bg-gray-900 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-gray-900 active:shadow-lg " onClick={handleClick}>
                Add Friend
              </button>
            )}
          </div>

          <div className="flex-col justify-between m-3">
            <div className="rounded-lg shadow-lg max-w-lg card-bottom justify-center">
              <ReactionList
                reactions={user.reactions}
                title={`${user.username}'s reaction...`}
              />
            </div>

            <div className="rounded-lg shadow-lg  card-bottom justify-center ">
              <FriendList
                username={user.username}
                friendCount={user.friendCount}
                friends={user.friends}
              />
            </div>
          </div>
          <div className="mb-3">{!userParam && <ReactionForm />}</div>
        </div>
    );
};

export default Profile;
