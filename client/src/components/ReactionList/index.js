import React from 'react';
import { Link } from 'react-router-dom';

const ReactionList = ({ reactions, title }) => {
  if (!reactions.length) {
    return <h3>No Reactions Yet</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {reactions &&
        reactions.map(reaction => (
          <div key={reaction._id} className="card mb-3">
            <p className="card-header">
              <Link
                to={`/profile/${reaction.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {reaction.username}
              </Link>{' '}
              reaction on {reaction.createdAt}
            </p>
            <div className="card-body">
              <Link to={`/reaction/${reaction._id}`}>
                <p>{reaction.reactionText}</p>
                <p className="mb-0">
                  Replies: {reaction.replyCount} || Click to{' '}
                  {reaction.replyCount ? 'see' : 'start'} the discussion!
                </p>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ReactionList;