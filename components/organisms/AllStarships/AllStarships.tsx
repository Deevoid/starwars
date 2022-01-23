import { useQuery } from "@apollo/client";
import React from "react";
import { StarshipCard } from "../../molecules/StarshipCard/StarshipCard";
import { getAllStarshipsQuery } from "./query";
import { AllStarships as AllStarshipTypes } from "./types/AllStarships";

type Props = {};

export const AllStarships = (props: Props) => {
  const { data } = useQuery<AllStarshipTypes>(getAllStarshipsQuery, {
    variables: {
      first: 50,
    },
  });

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data &&
        data.allStarships?.edges?.map((starship) => (
          <StarshipCard starship={starship?.node!} key={starship?.node?.id} />
        ))}
    </div>
  );
};
