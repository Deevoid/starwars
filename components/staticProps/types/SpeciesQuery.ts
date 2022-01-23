/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: SpeciesQuery
// ====================================================

export interface SpeciesQuery_species_homeworld {
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

export interface SpeciesQuery_species_filmConnection_edges_node {
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

export interface SpeciesQuery_species_filmConnection_edges {
  __typename: "SpeciesFilmsEdge";
  /**
   * The item at the end of the edge
   */
  node: SpeciesQuery_species_filmConnection_edges_node | null;
}

export interface SpeciesQuery_species_filmConnection {
  __typename: "SpeciesFilmsConnection";
  /**
   * A list of edges.
   */
  edges: (SpeciesQuery_species_filmConnection_edges | null)[] | null;
}

export interface SpeciesQuery_species_personConnection_edges_node {
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

export interface SpeciesQuery_species_personConnection_edges {
  __typename: "SpeciesPeopleEdge";
  /**
   * The item at the end of the edge
   */
  node: SpeciesQuery_species_personConnection_edges_node | null;
}

export interface SpeciesQuery_species_personConnection {
  __typename: "SpeciesPeopleConnection";
  /**
   * A list of edges.
   */
  edges: (SpeciesQuery_species_personConnection_edges | null)[] | null;
}

export interface SpeciesQuery_species {
  __typename: "Species";
  /**
   * The ID of an object
   */
  id: string;
  /**
   * The name of this species.
   */
  name: string | null;
  /**
   * The classification of this species, such as "mammal" or "reptile".
   */
  classification: string | null;
  /**
   * The designation of this species, such as "sentient".
   */
  designation: string | null;
  /**
   * The average lifespan of this species in years, null if unknown.
   */
  averageLifespan: number | null;
  /**
   * Common eye colors for this species, null if this species does not typically
   * have eyes.
   */
  eyeColors: (string | null)[] | null;
  /**
   * The language commonly spoken by this species.
   */
  language: string | null;
  /**
   * A planet that this species originates from.
   */
  homeworld: SpeciesQuery_species_homeworld | null;
  filmConnection: SpeciesQuery_species_filmConnection | null;
  personConnection: SpeciesQuery_species_personConnection | null;
}

export interface SpeciesQuery {
  species: SpeciesQuery_species | null;
}

export interface SpeciesQueryVariables {
  id: string;
}
