// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        -id: ID
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
    },
    type Reply {
        _id: ID
        replyBody: String
        createdAt: String
        username: String
        }

    type Query {
        users: [User]
        user(username: String!): User
        reactions(username: String): [Reaction]
        reaction(_id: ID!): Reaction
    }
 `;

 // export typeDefs
module.exports = typeDefs;