/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: AllPeoplePaths
// ====================================================

export interface AllPeoplePaths_allPeople_edges_node {
  __typename: "Person";
  /**
   * The ID of an object
   */
  id: string;
}

export interface AllPeoplePaths_allPeople_edges {
  __typename: "PeopleEdge";
  /**
   * The item at the end of the edge
   */
  node: AllPeoplePaths_allPeople_edges_node | null;
}

export interface AllPeoplePaths_allPeople {
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
  edges: (AllPeoplePaths_allPeople_edges | null)[] | null;
}

export interface AllPeoplePaths {
  allPeople: AllPeoplePaths_allPeople | null;
}

export interface AllPeoplePathsVariables {
  first?: number | null;
}
