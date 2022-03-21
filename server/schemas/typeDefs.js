// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`

    type Reaction {
        _id: ID
        thoughtText: String
        createdAt: String
        username: String
        reactionCount: Int
        reactions: [Reaction]
    }

    type Reaction {
        _id: ID
        reactionText: String
        createdAt: String
        username: String
    }

    type Query {
        reactions(username:String): [Reaction]
    }

`;

// export typeDefs
module.exports = typeDefs;