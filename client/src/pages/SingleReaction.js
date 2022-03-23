import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_REACTION } from '../utils/queries';
import ReactionForm from '../components/ReactionForm';
import Auth from '../utils/auth';

const SingleReaction = props => {

  const { id: reactionId } = useParams();

  const { loading, data } = useQuery(QUERY_REACTION, {
  variables: { id: reactionId }
  });

  const reaction = data?.reaction || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mb-3">
        <p className="m-3">
          <span className="flex justify-center mb-2">
            {reaction.username}
          </span>
          <div className='flex justify-center'>{' '}
            reaction on {reaction.createdAt}
          </div>
        </p>
        <div className="flex justify-center text-yellow-600">
          <p>" {reaction.reactionText} "</p>
        </div>
      </div>
      {Auth.loggedIn() && <ReactionForm reactionId={reaction._id} />}
</div>
  );
};

export default SingleReaction;
