/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllFilms
// ====================================================

export interface AllFilms_allFilms_edges_node {
  __typename: "Film";
  /**
   * The title of this film.
   */
  title: string | null;
  /**
   * The episode number of this film.
   */
  episodeID: number | null;
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
  /**
   * The ID of an object
   */
  id: string;
}

export interface AllFilms_allFilms_edges {
  __typename: "FilmsEdge";
  /**
   * The item at the end of the edge
   */
  node: AllFilms_allFilms_edges_node | null;
}

export interface AllFilms_allFilms {
  __typename: "FilmsConnection";
  /**
   * A count of the total number of objects in this connection, ignoring pagination.
   * This allows a client to fetch the first five objects by passing "5" as the
   * argument to "first", then fetch the total count so it could display "5 of 83",
   * for example.
   */
  totalCount: number | null;
  /**
   * A list of edges.
   */
  edges: (AllFilms_allFilms_edges | null)[] | null;
}

export interface AllFilms {
  allFilms: AllFilms_allFilms | null;
}

export interface AllFilmsVariables {
  first?: number | null;
}
