import { gql } from "@apollo/client";

export const getAllFilmsQuery = gql`
  query AllFilms($first: Int) {
    allFilms(first: $first) {
      totalCount
      edges {
        node {
          id
          title
          openingCrawl
          releaseDate
          director
        }
      }
    }
  }
`;
