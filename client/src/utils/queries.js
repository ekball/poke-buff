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
      reactions {
        _id
        reactionText
        createdAt
        replyCount
      }
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
      friendCount
      reactions {
        _id
        reactionText
        createdAt
        replyCount
        replies {
          _id
          createdAt
          replyBody
          username
        }
      }
      friends {
        _id
        username
      }
    }
  }
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      friendCount
      friends {
        _id
        username
      }
    }
  }
`;