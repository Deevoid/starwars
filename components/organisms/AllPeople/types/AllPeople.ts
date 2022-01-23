/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPeople
// ====================================================

export interface AllPeople_allPeople_edges_node_homeworld {
  __typename: "Planet";
  /**
   * The name of this planet.
   */
  name: string | null;
  /**
   * The ID of an object
   */
  id: string;
}

export interface AllPeople_allPeople_edges_node {
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
   * The gender of this person. Either "Male", "Female" or "unknown",
   * "n/a" if the person does not have a gender.
   */
  gender: string | null;
  /**
   * The birth year of the person, using the in-universe standard of BBY or ABY -
   * Before the Battle of Yavin or After the Battle of Yavin. The Battle of Yavin is
   * a battle that occurs at the end of Star Wars episode IV: A New Hope.
   */
  birthYear: string | null;
  /**
   * A planet that this person was born on or inhabits.
   */
  homeworld: AllPeople_allPeople_edges_node_homeworld | null;
}

export interface AllPeople_allPeople_edges {
  __typename: "PeopleEdge";
  /**
   * The item at the end of the edge
   */
  node: AllPeople_allPeople_edges_node | null;
}

export interface AllPeople_allPeople {
  __typename: "PeopleConnection";
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
  edges: (AllPeople_allPeople_edges | null)[] | null;
}

export interface AllPeople {
  allPeople: AllPeople_allPeople | null;
}

export interface AllPeopleVariables {
  first?: number | null;
}
