import { gql } from "@apollo/client";

export const getAllStarshipsQuery = gql`
  query AllStarships($first: Int) {
    allStarships(first: $first) {
      totalCount
      edges {
        node {
          id
          name
          model
          starshipClass
          consumables
        }
      }
    }
  }
`;
