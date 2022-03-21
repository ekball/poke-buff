const { Schema, model } = require('mongoose');
const replySchema = require('./Reply');
const dateFormat = require('../utils/dateFormat');

const reactionSchema = new Schema(
  {
    reactionText: {
      type: String,
      required: 'You need to leave a reaction!',
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
    replies: [replySchema]
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

const Reaction = model('Reaction', reactionSchema);

module.exports = Reaction;
