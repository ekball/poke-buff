import React from 'react';
import { Link } from 'react-router-dom';


const ReactionList = ({ reactions, title }) => {
  if (!reactions.length) {
    return <h3>No Reactions have been left...</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {reactions &&
        reactions.map(reaction => (
          <div key={reaction._id} className="mb-3">
            <p className="">
            <Link
                to={`/profile/${reaction.username}`}
                
                className="font-light"
            >
                {reaction.username}
            </Link>{' '}
            reaction on {reaction.createdAt}
            </p>

            <div className="">
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