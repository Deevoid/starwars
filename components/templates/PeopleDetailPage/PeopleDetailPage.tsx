import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import { DetailCard } from "../../organisms/DetailCard/DetailCard";
import { getPersonQuery } from "../../staticProps/query";
import { PersonQuery } from "../../staticProps/types/PersonQuery";

type Props = {};

export const PeopleDetailPage = (props: Props) => {
  const router = useRouter();
  const { id } = router.query;
  const { data } = useQuery<PersonQuery>(getPersonQuery, {
    variables: {
      id,
    },
  });
  const person = data?.person;

  const primaryinfo = {
    "Birth Year": [person?.birthYear],
    gender: [person?.gender],
    mass: [person?.mass],
  };

  const secondaryInfo = {
    movies: person?.filmConnection?.edges?.map((planet) => planet?.node?.title),
    starships: person?.starshipConnection?.edges?.map(
      (specie) => specie?.node?.name
    ),
    vehicles: person?.vehicleConnection?.edges?.map(
      (vehicle) => vehicle?.node?.name
    ),
  };

  return (
    <div>
      <DetailCard
        title={person?.name}
        subtitle={person?.homeworld?.name}
        primaryInfo={primaryinfo}
        secondaryInfo={secondaryInfo}
      />
    </div>
  );
};
