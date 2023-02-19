//check syntax

import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation loginUser
`;

export const ADD_USER = gql`
  mutation addUser
`;

export const SAVE_BOOK = gql`
  mutation saveBook
`;

export const REMOVE_BOOK = gql`
  mutation removeBook
`;