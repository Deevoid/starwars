/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: PersonQuery
// ====================================================

export interface PersonQuery_person_homeworld {
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

export interface PersonQuery_person_starshipConnection_edges_node {
  __typename: "Starship";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this starship. The common name, such as "Death Star".
   */
  name: string | null;
}

export interface PersonQuery_person_starshipConnection_edges {
  __typename: "PersonStarshipsEdge";
  /**
   * The item at the end of the edge
   */
  node: PersonQuery_person_starshipConnection_edges_node | null;
}

export interface PersonQuery_person_starshipConnection {
  __typename: "PersonStarshipsConnection";
  /**
   * A list of edges.
   */
  edges: (PersonQuery_person_starshipConnection_edges | null)[] | null;
}

export interface PersonQuery_person_filmConnection_edges_node {
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

export interface PersonQuery_person_filmConnection_edges {
  __typename: "PersonFilmsEdge";
  /**
   * The item at the end of the edge
   */
  node: PersonQuery_person_filmConnection_edges_node | null;
}

export interface PersonQuery_person_filmConnection {
  __typename: "PersonFilmsConnection";
  /**
   * A list of edges.
   */
  edges: (PersonQuery_person_filmConnection_edges | null)[] | null;
}

export interface PersonQuery_person_vehicleConnection_edges_node {
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
}

export interface PersonQuery_person_vehicleConnection_edges {
  __typename: "PersonVehiclesEdge";
  /**
   * The item at the end of the edge
   */
  node: PersonQuery_person_vehicleConnection_edges_node | null;
}

export interface PersonQuery_person_vehicleConnection {
  __typename: "PersonVehiclesConnection";
  /**
   * A list of edges.
   */
  edges: (PersonQuery_person_vehicleConnection_edges | null)[] | null;
}

export interface PersonQuery_person {
  __typename: "Person";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this person.
   */
  name: string | null;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear: string | null;
  /**
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender: string | null;
  /**
   * The hair color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have hair.
   */
  hairColor: string | null;
  /**
   * The eye color of this person. Will be "unknown" if not known or "n/a" if the
   * person does not have an eye.
   */
  eyeColor: string | null;
  /**
   * The mass of the person in kilograms.
   */
  mass: number | null;
  /**
   * A planet that this person was born on or inhabits.
   */
  homeworld: PersonQuery_person_homeworld | null;
  starshipConnection: PersonQuery_person_starshipConnection | null;
  filmConnection: PersonQuery_person_filmConnection | null;
  vehicleConnection: PersonQuery_person_vehicleConnection | null;
}

export interface PersonQuery {
  person: PersonQuery_person | null;
}

export interface PersonQueryVariables {
  id: string;
}
