/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PlanetQuery
// ====================================================

export interface PlanetQuery_planet_residentConnection_edges_node {
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

export interface PlanetQuery_planet_residentConnection_edges {
  __typename: "PlanetResidentsEdge";
  /**
   * The item at the end of the edge
   */
  node: PlanetQuery_planet_residentConnection_edges_node | null;
}

export interface PlanetQuery_planet_residentConnection {
  __typename: "PlanetResidentsConnection";
  /**
   * A list of edges.
   */
  edges: (PlanetQuery_planet_residentConnection_edges | null)[] | null;
}

export interface PlanetQuery_planet_filmConnection_edges_node {
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

export interface PlanetQuery_planet_filmConnection_edges {
  __typename: "PlanetFilmsEdge";
  /**
   * The item at the end of the edge
   */
  node: PlanetQuery_planet_filmConnection_edges_node | null;
}

export interface PlanetQuery_planet_filmConnection {
  __typename: "PlanetFilmsConnection";
  /**
   * A list of edges.
   */
  edges: (PlanetQuery_planet_filmConnection_edges | null)[] | null;
}

export interface PlanetQuery_planet {
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
   * The diameter of this planet in kilometers.
   */
  diameter: number | null;
  /**
   * The number of standard hours it takes for this planet to complete a single
   * rotation on its axis.
   */
  rotationPeriod: number | null;
  /**
   * A number denoting the gravity of this planet, where "1" is normal or 1 standard
   * G. "2" is twice or 2 standard Gs. "0.5" is half or 0.5 standard Gs.
   */
  gravity: string | null;
  /**
   * The average population of sentient beings inhabiting this planet.
   */
  population: number | null;
  /**
   * The climates of this planet.
   */
  climates: (string | null)[] | null;
  /**
   * The terrains of this planet.
   */
  terrains: (string | null)[] | null;
  /**
   * The percentage of the planet surface that is naturally occurring water or bodies
   * of water.
   */
  surfaceWater: number | null;
  residentConnection: PlanetQuery_planet_residentConnection | null;
  filmConnection: PlanetQuery_planet_filmConnection | null;
}

export interface PlanetQuery {
  planet: PlanetQuery_planet | null;
}

export interface PlanetQueryVariables {
  id: string;
}
