import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_THOUGHT = gql`
  mutation addThought($thoughtText: String!,$A1: String!,$A2: String!,$A3: String,$A4: String) {
    addThought(thoughtText: $thoughtText,A1: $A1,A2: $A2,A3: $A3,A4: $A4) {
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
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($thoughtId: ID!, $commentText: String, $V1: Int, $V2: Int, $V3: Int,$V4: Int) {
    addComment(thoughtId: $thoughtId, commentText: $commentText,V1: $V1, V2: $V2,V3: $V3,V4: $V4) {
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
        createdAt
      }
    }
  }
`;
export const REMOVE_SINGLE_THOUGHT = gql`
  mutation removeThought($thoughtId: ID!) {
   removeThought(thoughtId: $thoughtId) {
      _id
    }
  }
`;