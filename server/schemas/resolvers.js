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
    }
};