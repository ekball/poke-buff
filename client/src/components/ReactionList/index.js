import React from 'react';
import { Link } from 'react-router-dom';

const ReactionList = ({ reactions, title }) => {
  if (!reactions.length) {
    return <h3 className='flex justify-center'>No Reactions Yet</h3>;
  }

  return (
    <div className=''>
      <h3 className='flex justify-center rounded-t-lg bg-rose-500 w-full p-2'>{title}</h3>
      {reactions &&
        reactions.map(reaction => (
          <div key={reaction._id} className="card mb-3">
            <p className=" w-full p-2">
              <Link
                to={`/profile/${reaction.username}`}
                style={{ fontWeight: 500 }}
                className="text-rose-600 flex justify-center"
              >
                {reaction.username}
              </Link>{' '}
              on {reaction.createdAt}
            </p>
            <div className="flex justify-center rounded-b-lg bg-slate-200 w-full p-2 border-b-4">
              <Link to={`/reaction/${reaction._id}`}>
                <p className='flex justify-center text-yellow-600'>" {reaction.reactionText} "</p>
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