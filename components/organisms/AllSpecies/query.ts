import { gql } from "@apollo/client";

export const getAllSpeciesQuery = gql`
  query AllSpecies($first: Int) {
    allSpecies(first: $first) {
      totalCount
      edges {
        node {
          id
          name
          classification
          designation
          language
          homeworld {
            id
            name
          }
        }
      }
    }
  }
`;
