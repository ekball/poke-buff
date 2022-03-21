const { User, Reaction, Reply } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

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
    },
    Mutation: {
      // create a new user (signup)
      addUser: async (parent, args) => {
        const user = await User.create(args);
        return user;
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect email and/or password');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect email and/or password');
        }
      
        return user;
      }
    }
  };
  
  module.exports = resolvers;