//check syntax

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email:$email, password: $password) {
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

export const SAVE_BOOK = gql`
  mutation saveBook(bookData: BookInput!) {
    saveBook(_id: $_id, username: $username, email: $email, bookCount: $bookCount, savedBooks: $savedBooks) {
      _id
      username
      email
      bookCount
      saveBooks {
        bookId
        authors
        description
        title
        image
        link
      }
    }
  }
`;

export const REMOVE_BOOK = gql`
  mutation removeBook(bookId: ID!) {
    removeBook(_id: $_id, )
  }
`;