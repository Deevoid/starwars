import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { DetailCard } from "../../organisms/DetailCard/DetailCard";
import { getPlanetQuery } from "../../staticProps/query";
import { PlanetQuery } from "../../staticProps/types/PlanetQuery";

type Props = {};

export const PlanetDetailPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<PlanetQuery>(getPlanetQuery, {
    variables: {
      id,
    },
  });
  const planet = data?.planet;

  const primaryinfo = {
    diameter: [planet?.diameter],
    rotation: [planet?.rotationPeriod],
    gravity: [planet?.gravity],
    terrain: planet?.terrains,
    climates: planet?.climates,
    "Surface Water": [`${planet?.surfaceWater}%`],
  };

  const secondaryInfo = {
    movies: planet?.filmConnection?.edges?.map((planet) => planet?.node?.title),
    residents: planet?.residentConnection?.edges?.map(
      (specie) => specie?.node?.name
    ),
  };

  return (
    <div>
      <DetailCard
        title={planet?.name}
        subtitle={planet?.population?.toLocaleString()}
        primaryInfo={primaryinfo}
        secondaryInfo={secondaryInfo}
      />
    </div>
  );
};
