import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import ReactionList from '../components/ReactionList';

import { useQuery, useMutation } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import FriendList from '../components/FriendList';
import Auth from '../utils/auth';
import { ADD_FRIEND } from '../utils/mutations';
import ReactionForm from '../components/ReactionForm';


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
        <div>
            <div className="flex-row mb-3">
                <h2 className="bg-dark text-secondary p-3 display-inline-block">
                    Viewing {userParam ? `${user.username}'s` : 'your'} profile.
                </h2>

                {userParam && (
                <button className="btn ml-auto" onClick={handleClick}>
                    Add Friend
                </button>
                )}
            </div>

            <div className="text-center m-5">
                <div className="">
                <ReactionList reactions={user.reactions} title={`${user.username}'s reactions...`} />
                </div>

                <div className="text-center m-5">
                <FriendList
                    username={user.username}
                    friendCount={user.friendCount}
                    friends={user.friends}
                />
                </div>
            </div>
        </div>
    );
};

export default Profile;
