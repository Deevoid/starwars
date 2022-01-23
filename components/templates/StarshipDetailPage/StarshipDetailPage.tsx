import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { DetailCard } from "../../organisms/DetailCard/DetailCard";
import { getStarshipQuery } from "../../staticProps/query";
import { StarshipQuery } from "../../staticProps/types/StarshipQuery";

type Props = {};

export const StarshipDetailPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<StarshipQuery>(getStarshipQuery, {
    variables: {
      id,
    },
  });
  const starship = data?.starship;

  const primaryinfo = {
    Class: [starship?.starshipClass],
    manufacturers: starship?.manufacturers,
    "crew size": [starship?.crew],
    consumables: [starship?.consumables],
    passengers: [starship?.passengers],
    "cargo Capacity": [`${starship?.cargoCapacity}`],
  };

  const secondaryInfo = {
    movies: starship?.filmConnection?.edges?.map(
      (starship) => starship?.node?.title
    ),
    Pilots: starship?.pilotConnection?.edges?.map(
      (vehicle) => vehicle?.node?.name
    ),
  };

  return (
    <div>
      <DetailCard
        title={starship?.name}
        subtitle={starship?.model}
        primaryInfo={primaryinfo}
        secondaryInfo={secondaryInfo}
      />
    </div>
  );
};
