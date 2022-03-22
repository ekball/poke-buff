const { User, Reaction, Reply } = require('../models');
const { AuthenticationError } = require('apollo-server-express');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
      me: async (parent, args, context) => {
        if (context.user) {
          const userData = await User.findOne({ _id: context.user._id })
            .select('-__v -password')
            .populate('reactions')
            .populate('friends');
      
          return userData;
        }
      
        throw new AuthenticationError('Not logged in');
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
        .populate('reactions');
      },
      // get a user by username
      user: async (parent, { username }) => {
        return User.findOne({ username })
          .select('-__v -password')
          .populate('friends')
          .populate('reactions');
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
      },
      addReaction: async (parent, args, context) => {
        if (context.user) {
          const reaction = await Reaction.create({ ...args, username: context.user.username });
      
          await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $push: { reactions: reaction._id } },
            { new: true }
          );
      
          return reaction;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
      addReply: async (parent, { reactionId, replyBody }, context) => {
        if (context.user) {
          const updatedReaction = await Reaction.findOneAndUpdate(
            { _id: reactionId },
            { $push: { replies: { replyBody, username: context.user.username } } },
            { new: true, runValidators: true }
          );
      
          return updatedReaction;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      },
      addFriend: async (parent, { friendId }, context) => {
        if (context.user) {
          const updatedUser = await User.findOneAndUpdate(
            { _id: context.user._id },
            { $addToSet: { friends: friendId } },
            { new: true }
          ).populate('friends');
      
          return updatedUser;
        }
      
        throw new AuthenticationError('You need to be logged in!');
      }
    }
  };
  
  module.exports = resolvers;