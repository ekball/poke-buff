import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_REACTIONS } from '../utils/queries';
import ReactionList from '../components/ReactionList';

const Chatroom = () => {
  // use useQuery hook to make query request
  const { loading, data } = useQuery(QUERY_REACTIONS);

  const reactions = data?.reactions || [];
  console.log(reactions);

  return (
    <main>
      <div className="flex-row justify-between">
        <div className="columns-lg mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <ReactionList reactions={reactions} title="Some Feed for Reaction(s)..." />
          )}
        </div>
      </div>
    </main>
  );
};

export default Chatroom;
