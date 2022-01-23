import { useQuery, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Loader } from "../../atoms/Loader";
import { globalSearchText } from "../../globalStates/GlobalSearchText";
import { PlanetCard } from "../../molecules/PlanetCard/PlanetCard";
import { AllPeople_allPeople_edges } from "../AllPeople/types/AllPeople";
import { getAllPlanetsQuery } from "./query";
import {
  AllPlanets as AllPlanetsType,
  AllPlanets_allPlanets_edges,
} from "./types/AllPlanets";

type Props = {};

export const AllPlanets = (props: Props) => {
  const { data } = useQuery<AllPlanetsType>(getAllPlanetsQuery, {
    variables: {
      first: 20,
    },
  });

  const searchText = useReactiveVar(globalSearchText);
  const [result, setResult] = useState<
    (AllPlanets_allPlanets_edges | null)[] | null | undefined
  >(null);

  useEffect(() => {
    if (data) {
      setResult(data?.allPlanets?.edges);
    }
  }, [data]);

  useEffect(() => {
    if (searchText) {
      if (data) {
        const filtered = data?.allPlanets?.edges?.filter((film) => {
          const combinedString =
            film?.node?.name +
            film?.node?.climates?.join("") +
            film?.node?.terrains.join("");
          return combinedString
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
        if (filtered && filtered?.length > 0) {
          setResult(filtered);
        } else {
          setResult(data.allPlanets?.edges);
        }
      }
    } else {
      setResult(data?.allPlanets?.edges);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data ? (
        <>
          {result &&
            result.length > 0 &&
            result.map((planet) => (
              <PlanetCard planet={planet?.node!} key={planet?.node?.id} />
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
