import { useQuery, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Loader } from "../../atoms/Loader";
import { globalSearchText } from "../../globalStates/GlobalSearchText";
import { StarshipCard } from "../../molecules/StarshipCard/StarshipCard";
import { getAllStarshipsQuery } from "./query";
import {
  AllStarships as AllStarshipTypes,
  AllStarships_allStarships_edges,
} from "./types/AllStarships";

type Props = {};

export const AllStarships = (props: Props) => {
  const { data } = useQuery<AllStarshipTypes>(getAllStarshipsQuery, {
    variables: {
      first: 50,
    },
  });

  const searchText = useReactiveVar(globalSearchText);
  const [result, setResult] = useState<
    (AllStarships_allStarships_edges | null)[] | null | undefined
  >(null);

  useEffect(() => {
    if (data) {
      setResult(data?.allStarships?.edges);
    }
  }, [data]);

  useEffect(() => {
    if (searchText) {
      if (data) {
        const filtered = data?.allStarships?.edges?.filter((film) => {
          const combinedString =
            film?.node?.name + film?.node?.model + film?.node?.starshipClass;
          return combinedString
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
        if (filtered && filtered?.length > 0) {
          setResult(filtered);
        } else {
          setResult(data.allStarships?.edges);
        }
      }
    } else {
      setResult(data?.allStarships?.edges);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data ? (
        <>
          {result &&
            result.length > 0 &&
            result.map((starship) => (
              <StarshipCard
                starship={starship?.node!}
                key={starship?.node?.id}
              />
            ))}
        </>
      ) : (
        <div className="h-40 col-span-3 w-80 flex items-center justify-center">
          <Loader />
        </div>
      )}
    </div>
  );
};
