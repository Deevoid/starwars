import { useQuery } from "@apollo/client";
import React from "react";
import { SpeciesCard } from "../../molecules/SpeciesCard/SpeciesCard";
import { getAllSpeciesQuery } from "./query";
import { AllSpecies as AllSpeciesTypes } from "./types/AllSpecies";

type Props = {};

export const AllSpecies = (props: Props) => {
  const { data } = useQuery<AllSpeciesTypes>(getAllSpeciesQuery, {
    variables: {
      first: 50,
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data &&
        data.allSpecies?.edges?.map((specie) => (
          <SpeciesCard specie={specie?.node!} key={specie?.node?.id} />
        ))}
    </div>
  );
};
