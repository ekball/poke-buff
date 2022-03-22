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