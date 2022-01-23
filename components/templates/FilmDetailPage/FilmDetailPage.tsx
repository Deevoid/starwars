import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { DetailCard } from "../../organisms/DetailCard/DetailCard";
import { getFilmQuery } from "../../staticProps/query";
import { FileQuery } from "../../staticProps/types/FileQuery";

type Props = {};

export const FilmDetailPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<FileQuery>(getFilmQuery, {
    variables: {
      id,
    },
  });
  const film = data?.film;

  const primaryinfo = {
    director: [film?.director],
    producer: [film?.producers],
  };

  const secondaryInfo = {
    planets: film?.planetConnection?.edges?.map((planet) => planet?.node?.name),
    species: film?.speciesConnection?.edges?.map(
      (specie) => specie?.node?.name
    ),
    vehicles: film?.vehicleConnection?.edges?.map(
      (vehicle) => vehicle?.node?.name
    ),
    characters: film?.characterConnection?.edges?.map(
      (character) => character?.node?.name
    ),
  };

  return (
    <div>
      <DetailCard
        title={film?.title}
        subtitle={film?.releaseDate}
        description={film?.openingCrawl}
        primaryInfo={primaryinfo}
        secondaryInfo={secondaryInfo}
      />
    </div>
  );
};
