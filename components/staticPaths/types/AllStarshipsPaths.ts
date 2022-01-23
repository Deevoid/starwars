/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllStarshipsPaths
// ====================================================

export interface AllStarshipsPaths_allStarships_edges_node {
  __typename: "Starship";
  /**
   * The ID of an object
   */
  id: string;
}

export interface AllStarshipsPaths_allStarships_edges {
  __typename: "StarshipsEdge";
  /**
   * The item at the end of the edge
   */
  node: AllStarshipsPaths_allStarships_edges_node | null;
}

export interface AllStarshipsPaths_allStarships {
  __typename: "StarshipsConnection";
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
  edges: (AllStarshipsPaths_allStarships_edges | null)[] | null;
}

export interface AllStarshipsPaths {
  allStarships: AllStarshipsPaths_allStarships | null;
}

export interface AllStarshipsPathsVariables {
  first?: number | null;
}
