import React from 'react';
import { useParams } from 'react-router-dom';
import ReactionList from '../components/ReactionList';
import { useQuery } from '@apollo/client';
import { QUERY_USER } from '../utils/queries';
import FriendList from '../components/FriendList';


const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(QUERY_USER, {
    variables: { username: userParam }
  });

  const user = data?.user || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="flex-row mb-3">
        <h2 className="text-secondary p-3 inline-block">
          Viewing {user.username}'s profile.
        </h2>
      </div>

      <div className="flex-row justify-between mb-3">
        <div className="columns-12 mb-3 columns-8lg">
          <ReactionList reactions={user.reactions} title={`${user.username}'s reactions...`} />
        </div>

        <div className="columns-12 columns-3lg mb-3">
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
