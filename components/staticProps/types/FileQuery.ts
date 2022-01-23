/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FileQuery
// ====================================================

export interface FileQuery_film_speciesConnection_edges_node {
  __typename: "Species";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this species.
   */
  name: string | null;
}

export interface FileQuery_film_speciesConnection_edges {
  __typename: "FilmSpeciesEdge";
  /**
   * The item at the end of the edge
   */
  node: FileQuery_film_speciesConnection_edges_node | null;
}

export interface FileQuery_film_speciesConnection {
  __typename: "FilmSpeciesConnection";
  /**
   * A list of edges.
   */
  edges: (FileQuery_film_speciesConnection_edges | null)[] | null;
}

export interface FileQuery_film_starshipConnection_edges_node {
  __typename: "Starship";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this starship. The common name, such as "Death Star".
   */
  name: string | null;
}

export interface FileQuery_film_starshipConnection_edges {
  __typename: "FilmStarshipsEdge";
  /**
   * The item at the end of the edge
   */
  node: FileQuery_film_starshipConnection_edges_node | null;
}

export interface FileQuery_film_starshipConnection {
  __typename: "FilmStarshipsConnection";
  /**
   * A list of edges.
   */
  edges: (FileQuery_film_starshipConnection_edges | null)[] | null;
}

export interface FileQuery_film_vehicleConnection_edges_node {
  __typename: "Vehicle";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this vehicle. The common name, such as "Sand Crawler" or "Speeder
   * bike".
   */
  name: string | null;
}

export interface FileQuery_film_vehicleConnection_edges {
  __typename: "FilmVehiclesEdge";
  /**
   * The item at the end of the edge
   */
  node: FileQuery_film_vehicleConnection_edges_node | null;
}

export interface FileQuery_film_vehicleConnection {
  __typename: "FilmVehiclesConnection";
  /**
   * A list of edges.
   */
  edges: (FileQuery_film_vehicleConnection_edges | null)[] | null;
}

export interface FileQuery_film_characterConnection_edges_node {
  __typename: "Person";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this person.
   */
  name: string | null;
}

export interface FileQuery_film_characterConnection_edges {
  __typename: "FilmCharactersEdge";
  /**
   * The item at the end of the edge
   */
  node: FileQuery_film_characterConnection_edges_node | null;
}

export interface FileQuery_film_characterConnection {
  __typename: "FilmCharactersConnection";
  /**
   * A list of edges.
   */
  edges: (FileQuery_film_characterConnection_edges | null)[] | null;
}

export interface FileQuery_film_planetConnection_edges_node {
  __typename: "Planet";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this planet.
   */
  name: string | null;
}

export interface FileQuery_film_planetConnection_edges {
  __typename: "FilmPlanetsEdge";
  /**
   * The item at the end of the edge
   */
  node: FileQuery_film_planetConnection_edges_node | null;
}

export interface FileQuery_film_planetConnection {
  __typename: "FilmPlanetsConnection";
  /**
   * A list of edges.
   */
  edges: (FileQuery_film_planetConnection_edges | null)[] | null;
}

export interface FileQuery_film {
  __typename: "Film";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The title of this film.
   */
  title: string | null;
  /**
   * The episode number of this film.
   */
  episodeID: number | null;
  /**
   * The opening paragraphs at the beginning of this film.
   */
  openingCrawl: string | null;
  /**
   * The name of the director of this film.
   */
  director: string | null;
  /**
   * The name(s) of the producer(s) of this film.
   */
  producers: (string | null)[] | null;
  /**
   * The ISO 8601 date format of film release at original creator country.
   */
  releaseDate: string | null;
  speciesConnection: FileQuery_film_speciesConnection | null;
  starshipConnection: FileQuery_film_starshipConnection | null;
  vehicleConnection: FileQuery_film_vehicleConnection | null;
  characterConnection: FileQuery_film_characterConnection | null;
  planetConnection: FileQuery_film_planetConnection | null;
}

export interface FileQuery {
  film: FileQuery_film | null;
}

export interface FileQueryVariables {
  id: string;
}
