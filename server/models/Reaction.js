const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
  {
    reactionText: {
      type: String,
      required: 'Please leave a reaction!',
      minlength: 1,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);

reactionSchema.virtual('replyCount').get(function() {
  return this.replies.length;
});

const reaction = model('reaction', reactionSchema);

module.exports = reaction;
