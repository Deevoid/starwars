/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: StarshipQuery
// ====================================================

export interface StarshipQuery_starship_pilotConnection_edges_node {
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

export interface StarshipQuery_starship_pilotConnection_edges {
  __typename: "StarshipPilotsEdge";
  /**
   * The item at the end of the edge
   */
  node: StarshipQuery_starship_pilotConnection_edges_node | null;
}

export interface StarshipQuery_starship_pilotConnection {
  __typename: "StarshipPilotsConnection";
  /**
   * A list of edges.
   */
  edges: (StarshipQuery_starship_pilotConnection_edges | null)[] | null;
}

export interface StarshipQuery_starship_filmConnection_edges_node {
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

export interface StarshipQuery_starship_filmConnection_edges {
  __typename: "StarshipFilmsEdge";
  /**
   * The item at the end of the edge
   */
  node: StarshipQuery_starship_filmConnection_edges_node | null;
}

export interface StarshipQuery_starship_filmConnection {
  __typename: "StarshipFilmsConnection";
  /**
   * A list of edges.
   */
  edges: (StarshipQuery_starship_filmConnection_edges | null)[] | null;
}

export interface StarshipQuery_starship {
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
   * The manufacturers of this starship.
   */
  manufacturers: (string | null)[] | null;
  /**
   * The number of personnel needed to run or pilot this starship.
   */
  crew: string | null;
  /**
   * The maximum length of time that this starship can provide consumables for its
   * entire crew without having to resupply.
   */
  consumables: string | null;
  /**
   * The number of non-essential people this starship can transport.
   */
  passengers: string | null;
  /**
   * The maximum number of kilograms that this starship can transport.
   */
  cargoCapacity: number | null;
  pilotConnection: StarshipQuery_starship_pilotConnection | null;
  filmConnection: StarshipQuery_starship_filmConnection | null;
}

export interface StarshipQuery {
  starship: StarshipQuery_starship | null;
}

export interface StarshipQueryVariables {
  id: string;
}
