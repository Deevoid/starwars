import { gql } from "@apollo/client";

export const getFilmQuery = gql`
  query FileQuery($id: ID!) {
    film(id: $id) {
      id
      title
      episodeID
      openingCrawl
      director
      producers
      releaseDate
      speciesConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      starshipConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      vehicleConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      characterConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      planetConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export const getPersonQuery = gql`
  query PersonQuery($id: ID!) {
    person(id: $id) {
      id
      name
      birthYear
      gender
      hairColor
      eyeColor
      mass
      homeworld {
        id
        name
      }
      starshipConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      filmConnection(first: 5) {
        edges {
          node {
            id
            title
          }
        }
      }
      vehicleConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export const getPlanetQuery = gql`
  query PlanetQuery($id: ID!) {
    planet(id: $id) {
      id
      name
      diameter
      rotationPeriod
      gravity
      population
      climates
      terrains
      surfaceWater
      residentConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      filmConnection(first: 5) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`;

export const getSpeciesQuery = gql`
  query SpeciesQuery($id: ID!) {
    species(id: $id) {
      id
      name
      classification
      designation
      averageLifespan
      eyeColors
      language
      homeworld {
        id
        name
      }
      filmConnection(first: 5) {
        edges {
          node {
            id
            title
          }
        }
      }
      personConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
    }
  }
`;

export const getStarshipQuery = gql`
  query StarshipQuery($id: ID!) {
    starship(id: $id) {
      id
      name
      model
      starshipClass
      manufacturers
      crew
      consumables
      passengers
      cargoCapacity
      pilotConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      filmConnection(first: 5) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`;

export const getSVehicleQuery = gql`
  query VehicleQuery($id: ID!) {
    vehicle(id: $id) {
      id
      name
      model
      vehicleClass
      manufacturers
      crew
      consumables
      passengers
      cargoCapacity
      pilotConnection(first: 5) {
        edges {
          node {
            id
            name
          }
        }
      }
      filmConnection(first: 5) {
        edges {
          node {
            id
            title
          }
        }
      }
    }
  }
`;
