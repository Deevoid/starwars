import { gql } from "@apollo/client";

export const getAllFilmsQuery = gql`
  query AllFilmsPaths($first: Int) {
    allFilms(first: $first) {
      totalCount
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const getAllPeopleQuery = gql`
  query AllPeoplePaths($first: Int) {
    allPeople(first: $first) {
      totalCount
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const getAllPlanetsQuery = gql`
  query AllPlanetsPaths($first: Int) {
    allPlanets(first: $first) {
      totalCount
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const getAllSpeciesQuery = gql`
  query AllSpeciesPaths($first: Int) {
    allSpecies(first: $first) {
      totalCount
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const getAllStarshipsQuery = gql`
  query AllStarshipsPaths($first: Int) {
    allStarships(first: $first) {
      totalCount
      edges {
        node {
          id
        }
      }
    }
  }
`;

export const getAllVehiclesQuery = gql`
  query AllVehiclesPaths($first: Int) {
    allVehicles(first: $first) {
      totalCount
      edges {
        node {
          id
        }
      }
    }
  }
`;
