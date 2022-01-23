import { useQuery } from "@apollo/client";
import React from "react";
import { PlanetCard } from "../../molecules/PlanetCard/PlanetCard";
import { getAllPlanetsQuery } from "./query";
import { AllPlanets as AllPlanetsType } from "./types/AllPlanets";

type Props = {};

export const AllPlanets = (props: Props) => {
  const { data } = useQuery<AllPlanetsType>(getAllPlanetsQuery, {
    variables: {
      first: 20,
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data &&
        data.allPlanets?.edges?.map((planet) => (
          <PlanetCard planet={planet?.node!} key={planet?.node?.id} />
        ))}
    </div>
  );
};
