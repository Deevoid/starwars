import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { DetailCard } from "../../organisms/DetailCard/DetailCard";
import { getSVehicleQuery } from "../../staticProps/query";
import { VehicleQuery } from "../../staticProps/types/VehicleQuery";

type Props = {};

export const VehiclesDetailPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<VehicleQuery>(getSVehicleQuery, {
    variables: {
      id,
    },
  });
  const vehicle = data?.vehicle;

  const primaryinfo = {
    Class: [vehicle?.vehicleClass],
    manufacturers: vehicle?.manufacturers,
    "crew size": [vehicle?.crew],
    consumables: [vehicle?.consumables],
    passengers: [vehicle?.passengers],
    "cargo Capacity": [`${vehicle?.cargoCapacity}`],
  };

  const secondaryInfo = {
    movies: vehicle?.filmConnection?.edges?.map(
      (vehicle) => vehicle?.node?.title
    ),
    Pilots: vehicle?.pilotConnection?.edges?.map(
      (vehicle) => vehicle?.node?.name
    ),
  };

  return (
    <div>
      <DetailCard
        title={vehicle?.name}
        subtitle={vehicle?.model}
        primaryInfo={primaryinfo}
        secondaryInfo={secondaryInfo}
      />
    </div>
  );
};
