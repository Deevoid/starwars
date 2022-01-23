/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPlanetsPaths
// ====================================================

export interface AllPlanetsPaths_allPlanets_edges_node {
  __typename: "Planet";
  /**
   * The ID of an object
   */
  id: string;
}

export interface AllPlanetsPaths_allPlanets_edges {
  __typename: "PlanetsEdge";
  /**
   * The item at the end of the edge
   */
  node: AllPlanetsPaths_allPlanets_edges_node | null;
}

export interface AllPlanetsPaths_allPlanets {
  __typename: "PlanetsConnection";
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
  edges: (AllPlanetsPaths_allPlanets_edges | null)[] | null;
}

export interface AllPlanetsPaths {
  allPlanets: AllPlanetsPaths_allPlanets | null;
}

export interface AllPlanetsPathsVariables {
  first?: number | null;
}
