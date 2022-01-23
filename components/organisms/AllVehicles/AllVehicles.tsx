import { useQuery } from "@apollo/client";
import React from "react";
import { VehiclesCard } from "../../molecules/VehiclesCard/VehiclesCard";
import { getAllVehiclesQuery } from "./query";
import { AllVehicles as AllVehiclesTypes } from "./types/AllVehicles";

type Props = {};

export const AllVehicles = (props: Props) => {
  const { data } = useQuery<AllVehiclesTypes>(getAllVehiclesQuery, {
    variables: {
      first: 50,
    },
  });

  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data &&
        data.allVehicles?.edges?.map((vehicle) => (
          <VehiclesCard vehicle={vehicle?.node!} key={vehicle?.node?.id} />
        ))}
    </div>
  );
};
