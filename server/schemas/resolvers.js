const { User, Reaction } = require('../models');

const resolvers = {
    Query: {
      reactions: async (parent, { username }) => {
        const params = username ? { username } : {};
        return Reaction.find(params).sort({ createdAt: -1 });
      },
    }
  };
  
  module.exports = resolvers;