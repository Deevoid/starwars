/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllFilmsPaths
// ====================================================

export interface AllFilmsPaths_allFilms_edges_node {
  __typename: "Film";
  /**
   * The ID of an object
   */
  id: string;
}

export interface AllFilmsPaths_allFilms_edges {
  __typename: "FilmsEdge";
  /**
   * The item at the end of the edge
   */
  node: AllFilmsPaths_allFilms_edges_node | null;
}

export interface AllFilmsPaths_allFilms {
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
  edges: (AllFilmsPaths_allFilms_edges | null)[] | null;
}

export interface AllFilmsPaths {
  allFilms: AllFilmsPaths_allFilms | null;
}

export interface AllFilmsPathsVariables {
  first?: number | null;
}
