const { User, Reaction, Reply } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args) => {
        const userData = await User.findOne({})
          .select('-__v -password')
          .populate('reactions')
          .populate('friends');
    
        return userData;
      },
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
        const token = signToken(user);
      
        return { token, user };
      },
      login: async (parent, { email, password }) => {
        const user = await User.findOne({ email });
      
        if (!user) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const correctPw = await user.isCorrectPassword(password);
      
        if (!correctPw) {
          throw new AuthenticationError('Incorrect credentials');
        }
      
        const token = signToken(user);
        return { token, user };
      }
    }
  };
  
  module.exports = resolvers;