/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllVehiclesPaths
// ====================================================

export interface AllVehiclesPaths_allVehicles_edges_node {
  __typename: "Vehicle";
  /**
   * The ID of an object
   */
  id: string;
}

export interface AllVehiclesPaths_allVehicles_edges {
  __typename: "VehiclesEdge";
  /**
   * The item at the end of the edge
   */
  node: AllVehiclesPaths_allVehicles_edges_node | null;
}

export interface AllVehiclesPaths_allVehicles {
  __typename: "VehiclesConnection";
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
  edges: (AllVehiclesPaths_allVehicles_edges | null)[] | null;
}

export interface AllVehiclesPaths {
  allVehicles: AllVehiclesPaths_allVehicles | null;
}

export interface AllVehiclesPathsVariables {
  first?: number | null;
}
