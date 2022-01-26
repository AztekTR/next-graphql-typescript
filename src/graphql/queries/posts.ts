import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query getAllPosts {
    posts(pagination: { limit: 100000, page: 1 }) {
      data {
        id
        title
        body
        author {
          username
        }
      }
    }
  }

`;

export const GET_ONE_POST = gql`
query getOnePost($postId: ID!) {
    post(postId: $postId) {
        id
        title
        body
        author {
          username
        }
    }
  }
`
