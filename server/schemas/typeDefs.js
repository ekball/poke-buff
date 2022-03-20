// import the gql tagged template function
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    helloWorld: String
  }
`;

// export typeDefs
module.exports = typeDefs;