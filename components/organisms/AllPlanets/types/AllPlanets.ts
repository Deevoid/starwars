/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPlanets
// ====================================================

export interface AllPlanets_allPlanets_edges_node {
  __typename: "Planet";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this planet.
   */
  name: string | null;
  /**
   * The average population of sentient beings inhabiting this planet.
   */
  population: number | null;
  /**
   * The terrains of this planet.
   */
  terrains: (string | null)[] | null;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater: number | null;
  /**
   * The climates of this planet.
   */
  climates: (string | null)[] | null;
}

export interface AllPlanets_allPlanets_edges {
  __typename: "PlanetsEdge";
  /**
   * The item at the end of the edge
   */
  node: AllPlanets_allPlanets_edges_node | null;
}

export interface AllPlanets_allPlanets {
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
  edges: (AllPlanets_allPlanets_edges | null)[] | null;
}

export interface AllPlanets {
  allPlanets: AllPlanets_allPlanets | null;
}

export interface AllPlanetsVariables {
  first?: number | null;
}
