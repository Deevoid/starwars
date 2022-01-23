import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { DetailCard } from "../../organisms/DetailCard/DetailCard";
import { getPlanetQuery, getSpeciesQuery } from "../../staticProps/query";
import { PlanetQuery } from "../../staticProps/types/PlanetQuery";
import { SpeciesQuery } from "../../staticProps/types/SpeciesQuery";

type Props = {};

export const SpeciesDetailPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<SpeciesQuery>(getSpeciesQuery, {
    variables: {
      id,
    },
  });
  const species = data?.species;

  const primaryinfo = {
    designation: [species?.designation],
    "Home World": [species?.homeworld?.name],
    language: [species?.language],
    "Life Span": [species?.averageLifespan],
  };

  const secondaryInfo = {
    movies: species?.filmConnection?.edges?.map(
      (species) => species?.node?.title
    ),
    Personas: species?.personConnection?.edges?.map(
      (specie) => specie?.node?.name
    ),
  };

  return (
    <div>
      <DetailCard
        title={species?.name}
        subtitle={species?.classification}
        primaryInfo={primaryinfo}
        secondaryInfo={secondaryInfo}
      />
    </div>
  );
};
