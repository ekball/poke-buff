const { User, Reaction, Reply } = require('../models');

const resolvers = {
    Query: {
      reactions: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Reaction.find(params).sort({ createdAt: -1 });
      },
      // get one reaction by id
      reaction: async (parent, { _id }) => {
        return Reaction.findOne({ _id });
      },
      // get all users
      users: async () => {
        return User.find()
        .select('-__v -password')
        .populate('friends')
        .populate('thoughts');
      },
      // get a user by username
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('friends')
          .populate('thoughts');
      },
    }
  };
  
  module.exports = resolvers;