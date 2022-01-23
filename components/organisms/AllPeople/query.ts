import { gql } from "@apollo/client";

export const getAllPeopleQuery = gql`
  query AllPeople($first: Int) {
    allPeople(first: $first) {
      totalCount
      edges {
        node {
          id
          name
          gender
          birthYear
          homeworld {
            name
            id
          }
        }
      }
    }
  }
`;
