const { gql } = require("apollo-server-express");

// Check syntax of all of these. Unsure

const typeDefs = gql`
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
    token: ID!
    user: User 
  }

  type Query {
    me: User
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    saveBook([bookAuthor: String!], description: String!, title: String!, bookId: Int!, image, link: String!): User
    removeBook(bookId: Int!): User
  }
`;

module.exports = typeDefs;
