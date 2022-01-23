/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllSpecies
// ====================================================

export interface AllSpecies_allSpecies_edges_node_homeworld {
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

export interface AllSpecies_allSpecies_edges_node {
  __typename: "Species";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this species.
   */
  name: string | null;
  /**
   * The classification of this species, such as "mammal" or "reptile".
   */
  classification: string | null;
  /**
   * The designation of this species, such as "sentient".
   */
  designation: string | null;
  /**
   * The language commonly spoken by this species.
   */
  language: string | null;
  /**
   * A planet that this species originates from.
   */
  homeworld: AllSpecies_allSpecies_edges_node_homeworld | null;
}

export interface AllSpecies_allSpecies_edges {
  __typename: "SpeciesEdge";
  /**
   * The item at the end of the edge
   */
  node: AllSpecies_allSpecies_edges_node | null;
}

export interface AllSpecies_allSpecies {
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
  edges: (AllSpecies_allSpecies_edges | null)[] | null;
}

export interface AllSpecies {
  allSpecies: AllSpecies_allSpecies | null;
}

export interface AllSpeciesVariables {
  first?: number | null;
}
