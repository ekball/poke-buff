import React from 'react';
import { Link } from 'react-router-dom';

const ReactionList = ({ reactions, title }) => {
  if (!reactions.length) {
    return <h3>No Reactions Yet</h3>;
  }

  return (
    <div className=''>
      <h3 className='flex justify-center rounded-t-lg bg-rose-500 w-full p-2'>{title}</h3>
      {reactions &&
        reactions.map(reaction => (
          <div key={reaction._id} className="card mb-3">
            <p className="flex justify-center w-full p-2">
              <Link
                to={`/profile/${reaction.username}`}
                style={{ fontWeight: 700 }}
                className="text-light"
              >
                {reaction.username}
              </Link>{' '}
              on {reaction.createdAt}
            </p>
            <div className="flex justify-center rounded-b-lg bg-slate-200 w-full p-2">
              <Link to={`/reaction/${reaction._id}`}>
                <p className='flex justify-center text-yellow-600'>{reaction.reactionText}</p>
                <p className="">
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