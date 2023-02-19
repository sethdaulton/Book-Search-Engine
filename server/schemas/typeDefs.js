const { gql } = require("apollo-server-express");

// Check syntax of all of these. Unsure

const typeDefs = gql`
  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
  }

  type Mutation {
    saveBook([bookAuthor: String!], description: String!, title: String!, bookId: Int!, image, link: String!): User
  }

  type Mutation {
    removeBook(bookId: Int!): User
  }

  type User {
    _id: ID
    username: String
    email: String
    bookCount: Int
    savedBooks: [Book] 
  }

  type Book {
    bookId: Int
    authors: [author: String!]
    description: String
    title: String
    image
    link: String 
  }

  type Auth {
    token
    user: User 
  }
`;

module.exports = typeDefs;
