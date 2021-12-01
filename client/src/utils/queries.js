import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        createdAt
       
      }
    }
  }
`;

export const QUERY_THOUGHTS = gql`
  query getThoughts {
    thoughts {
      _id
      thoughtText
      thoughtAuthor
      A1
      A2
      A3
      A4
      createdAt
      comments {
        _id
        commentText
        V1
        V2
        V3
        V4
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_SINGLE_THOUGHT = gql`
  query getSingleThought($thoughtId: ID!) {
    thought(thoughtId: $thoughtId) {
      _id
      thoughtText
      A1
      A2
      A3
      A4
      thoughtAuthor
      createdAt
      comments {
        _id
        commentText
        V1
        V2
        V3
        V4
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      thoughts {
        _id
        thoughtText
        thoughtAuthor
        createdAt
        comments {
          _id
          commentText
          V1
          V2
          V3
          V4
          commentAuthor
          createdAt
        }

      }
    }
  }
`;

