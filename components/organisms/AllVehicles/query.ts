import { gql } from "@apollo/client";

export const getAllVehiclesQuery = gql`
  query AllVehicles($first: Int) {
    allVehicles(first: $first) {
      totalCount
      edges {
        node {
          id
          name
          model
          vehicleClass
          manufacturers
          consumables
        }
      }
    }
  }
`;
