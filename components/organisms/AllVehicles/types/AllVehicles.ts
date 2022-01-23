/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllVehicles
// ====================================================

export interface AllVehicles_allVehicles_edges_node {
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
  /**
   * The model or official name of this vehicle. Such as "All-Terrain Attack
   * Transport".
   */
  model: string | null;
  /**
   * The class of this vehicle, such as "Wheeled" or "Repulsorcraft".
   */
  vehicleClass: string | null;
  /**
   * The manufacturers of this vehicle.
   */
  manufacturers: (string | null)[] | null;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables: string | null;
}

export interface AllVehicles_allVehicles_edges {
  __typename: "VehiclesEdge";
  /**
   * The item at the end of the edge
   */
  node: AllVehicles_allVehicles_edges_node | null;
}

export interface AllVehicles_allVehicles {
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
  edges: (AllVehicles_allVehicles_edges | null)[] | null;
}

export interface AllVehicles {
  allVehicles: AllVehicles_allVehicles | null;
}

export interface AllVehiclesVariables {
  first?: number | null;
}
