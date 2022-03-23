import React from 'react';
import { Link } from 'react-router-dom';

const ReplyList = ({ replies }) => {
  return (
        <div className="mb-3">
            <div className="">
                <span className="text-light">Replys</span>
            </div>
            <div className="card-body">
                {replies &&
                replies.map(reply => (
                    <p className="rounded-full mb-3" key={reply._id}>
                    {reply.replyBody} {'// '}
                    <Link to={`/profile/${reply.username}`} style={{ fontWeight: 500 }}>
                        {reply.username} on {reply.createdAt}
                    </Link>
                    </p>
                ))}
            </div>
        </div>
  );
};

export default ReplyList;