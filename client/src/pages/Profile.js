import React from 'react';
import { Redirect, useParams } from 'react-router-dom';

import ReactionList from '../components/ReactionList';

import { useQuery } from '@apollo/client';
import { QUERY_USER, QUERY_ME } from '../utils/queries';
import FriendList from '../components/FriendList';
import Auth from '../utils/auth';


const Profile = () => {
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

    return (
        <div>
            <div className="text-center m-5">
            <h2 className="bg-dark text-secondary p-3 display-inline-block">
                Viewing {userParam ? `${user.username}'s` : 'your'} profile.
            </h2>
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
