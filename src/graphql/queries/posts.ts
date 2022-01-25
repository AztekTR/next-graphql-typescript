import { gql } from "@apollo/client";

const GET_ALL_POSTS = gql`
  {
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

export default GET_ALL_POSTS;
