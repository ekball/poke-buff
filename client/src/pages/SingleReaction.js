import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_REACTIONS } from '../utils/queries';
import ReactionList from '../components/ReactionList';

const SingleReaction = props => {

  const { id: reactionId } = useParams();

  const { loading, data } = useQuery(QUERY_REACTIONS, {
  variables: { id: reactionId }
  });

  const reaction = data?.reaction || {};

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="mb-3">
        <p className="">
          <span className="font-bold">
            {reaction.username}
          </span>{' '}
          reaction on {reaction.createdAt}
        </p>
        <div className="">
          <p>{reaction.reactionText}</p>
        </div>
      </div>
      {reaction.replyCount > 0 && <ReactionList replies={reaction.replies} />}
</div>
  );
};

export default SingleReaction;
