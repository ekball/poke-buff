// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        username: String
        email: String
        friendCount: Int
        reactions: [Reaction]
        friends: [User]
    }
    type Reaction {
        _id: ID
        reactionText: String
        createdAt: String
        username: String
        replyCount: Int
        replies: [Reply]
    }
    type Reply {
        _id: ID
        replyBody: String
        createdAt: String
        username: String
    }
    type Query {
        me: User
        users: [User]
        user(username: String!): User
        reactions(username: String): [Reaction]
        reaction(_id: ID!): Reaction
    }
    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(username: String!, email: String!, password: String!): Auth
        addReaction(reactionText: String!): Reaction
        addReply(reactionId: ID!, replyBody: String!): Reaction
        addFriend(friendId: ID!): User
    }
    type Auth {
        token: ID!
        user: User
    }
`;

// export typeDefs
module.exports = typeDefs;