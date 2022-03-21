const {User, Reaction } = require('../models');

const resolvers = {
    Query: {
      users: async () => {
        return User.find()
        .select('-__v -password')
        .populate('reactions')
        .populate('friends')
      },
      user: async (parent, { username }) => {
        return User.findOne({ username })
        .select('-__v -password')
        .populate('friends')
        .populate('reactions')
      },

      reaction: async (parent, { username }) => {
        const parms = username ? { username } : {};
        return Reaction.find(parms).sort({ createdAt: -1 });
      },
      reaction: async (parent, { _id }) => {
        return Reaction.findOne({ _id });
   },
  }
};

  module.exports = resolvers;