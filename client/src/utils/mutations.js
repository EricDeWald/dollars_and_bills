import { gql } from '@apollo/client';

export const LOGIN = gql`
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
  mutation addUser(
    $username: String!
    $email: String!
    $password: String!
  ) {
    addUser(
      username: $username
      email: $email
      password: $password
    ) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_BUDGET = gql`
mutation addBudget(
$name: String!
 $amount: Int! 
 ) {
  addBudget(
    name: $name 
    amount: $amount
    ) {
    name
    amount
  }
}
`;

export const ADD_EXPENSE = gql`
mutation addExpense(
$name: String!
 $amount: Int!
 $description: String! 
 ) {
  addExpense(
    name: $name 
    amount: $amount
    description: $description
    ) {
    name
    amount
    description
  }
}
`;