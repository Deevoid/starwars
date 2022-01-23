/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllSpeciesPaths
// ====================================================

export interface AllSpeciesPaths_allSpecies_edges_node {
  __typename: "Species";
  /**
   * The ID of an object
   */
  id: string;
}

export interface AllSpeciesPaths_allSpecies_edges {
  __typename: "SpeciesEdge";
  /**
   * The item at the end of the edge
   */
  node: AllSpeciesPaths_allSpecies_edges_node | null;
}

export interface AllSpeciesPaths_allSpecies {
  __typename: "SpeciesConnection";
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
  edges: (AllSpeciesPaths_allSpecies_edges | null)[] | null;
}

export interface AllSpeciesPaths {
  allSpecies: AllSpeciesPaths_allSpecies | null;
}

export interface AllSpeciesPathsVariables {
  first?: number | null;
}
