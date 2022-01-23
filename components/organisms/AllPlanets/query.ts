import { gql } from "@apollo/client";

export const getAllPlanetsQuery = gql`
  query AllPlanets($first: Int) {
    allPlanets(first: $first) {
      totalCount
      edges {
        node {
          id
          name
          population
          terrains
          surfaceWater
          climates
        }
      }
    }
  }
`;
