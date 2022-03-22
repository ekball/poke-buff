const faker = require('faker');

const db = require('../config/connection');
const { Reaction, User } = require('../models');

db.once('open', async () => {
  await Reaction.deleteMany({});
  await User.deleteMany({});

  // create user data
  const userData = [];

  for (let i = 0; i < 50; i += 1) {
    const username = faker.internet.userName();
    const email = faker.internet.email(username);
    const password = faker.internet.password();

    userData.push({ username, email, password });
  }

  const createdUsers = await User.collection.insertMany(userData);

  // create friends
  for (let i = 0; i < 100; i += 1) {
    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { _id: userId } = createdUsers.ops[randomUserIndex];

    let friendId = userId;

    while (friendId === userId) {
      const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
      friendId = createdUsers.ops[randomUserIndex];
    }

    await User.updateOne({ _id: userId }, { $addToSet: { friends: friendId } });
  }

  // create reactions
  let createdReactions = [];
  for (let i = 0; i < 100; i += 1) {
    const reactionText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdReaction = await Reaction.create({ reactionText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { reactions: createdReaction._id } }
    );

    createdReactions.push(createdReaction);
  }


  // create replies
  for (let i = 0; i < 100; i += 1) {
    const replyBody = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username } = createdUsers.ops[randomUserIndex];

    const randomReactionIndex = Math.floor(Math.random() * createdReactions.length);
    const { _id: reactionId } = createdReactions[randomReactionIndex];

    await Reaction.updateOne(
      { _id: reactionId },
      { $push: { replies: { replyBody, username } } },
      { runValidators: true }
    );
  }

  console.log('all done!');
  process.exit(0);
});