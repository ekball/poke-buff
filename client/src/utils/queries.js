import { gql } from '@apollo/client';

export const QUERY_REACTIONS = gql`
  query reactions($username: String) {
    reactions(username: $username) {
      _id
      reactionText
      createdAt
      username
      replyCount
      replies {
        _id
        createdAt
        username
        replyBody
      }
    }
  }
`;

export const QUERY_REACTION = gql`
  query reaction($id: ID!) {
    reaction(_id: $id) {
      _id
      reactionText
      createdAt
      username
      replyCount
      replies {
        _id
        createdAt
        username
        replyBody
      }
    }
  }
`;

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
      thoughts {
        _id
        thoughtText
        createdAt
        reactionCount
      }
    }
  }
`;