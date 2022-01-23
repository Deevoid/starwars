/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllStarships
// ====================================================

export interface AllStarships_allStarships_edges_node {
  __typename: "Starship";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this starship. The common name, such as "Death Star".
   */
  name: string | null;
  /**
   * The model or official name of this starship. Such as "T-65 X-wing" or "DS-1
   * Orbital Battle Station".
   */
  model: string | null;
  /**
   * The class of this starship, such as "Starfighter" or "Deep Space Mobile
   * Battlestation"
   */
  starshipClass: string | null;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables: string | null;
}

export interface AllStarships_allStarships_edges {
  __typename: "StarshipsEdge";
  /**
   * The item at the end of the edge
   */
  node: AllStarships_allStarships_edges_node | null;
}

export interface AllStarships_allStarships {
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
  edges: (AllStarships_allStarships_edges | null)[] | null;
}

export interface AllStarships {
  allStarships: AllStarships_allStarships | null;
}

export interface AllStarshipsVariables {
  first?: number | null;
}
