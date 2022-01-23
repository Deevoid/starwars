/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: VehicleQuery
// ====================================================

export interface VehicleQuery_vehicle_pilotConnection_edges_node {
  __typename: "Person";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this person.
   */
  name: string | null;
}

export interface VehicleQuery_vehicle_pilotConnection_edges {
  __typename: "VehiclePilotsEdge";
  /**
   * The item at the end of the edge
   */
  node: VehicleQuery_vehicle_pilotConnection_edges_node | null;
}

export interface VehicleQuery_vehicle_pilotConnection {
  __typename: "VehiclePilotsConnection";
  /**
   * A list of edges.
   */
  edges: (VehicleQuery_vehicle_pilotConnection_edges | null)[] | null;
}

export interface VehicleQuery_vehicle_filmConnection_edges_node {
  __typename: "Film";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The title of this film.
   */
  title: string | null;
}

export interface VehicleQuery_vehicle_filmConnection_edges {
  __typename: "VehicleFilmsEdge";
  /**
   * The item at the end of the edge
   */
  node: VehicleQuery_vehicle_filmConnection_edges_node | null;
}

export interface VehicleQuery_vehicle_filmConnection {
  __typename: "VehicleFilmsConnection";
  /**
   * A list of edges.
   */
  edges: (VehicleQuery_vehicle_filmConnection_edges | null)[] | null;
}

export interface VehicleQuery_vehicle {
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
   * The number of personnel needed to run or pilot this vehicle.
   */
  crew: string | null;
  /**
   * The maximum length of time that this vehicle can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables: string | null;
  /**
   * The number of non-essential people this vehicle can transport.
   */
  passengers: string | null;
  /**
   * The maximum number of kilograms that this vehicle can transport.
   */
  cargoCapacity: number | null;
  pilotConnection: VehicleQuery_vehicle_pilotConnection | null;
  filmConnection: VehicleQuery_vehicle_filmConnection | null;
}

export interface VehicleQuery {
  vehicle: VehicleQuery_vehicle | null;
}

export interface VehicleQueryVariables {
  id: string;
}
