import { useQuery, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Loader } from "../../atoms/Loader";
import { globalSearchText } from "../../globalStates/GlobalSearchText";
import { SpeciesCard } from "../../molecules/SpeciesCard/SpeciesCard";
import { AllPlanets_allPlanets_edges } from "../AllPlanets/types/AllPlanets";
import { getAllSpeciesQuery } from "./query";
import {
  AllSpecies as AllSpeciesTypes,
  AllSpecies_allSpecies_edges,
} from "./types/AllSpecies";

type Props = {};

export const AllSpecies = (props: Props) => {
  const { data } = useQuery<AllSpeciesTypes>(getAllSpeciesQuery, {
    variables: {
      first: 50,
    },
  });

  const searchText = useReactiveVar(globalSearchText);
  const [result, setResult] = useState<
    (AllSpecies_allSpecies_edges | null)[] | null | undefined
  >(null);

  useEffect(() => {
    if (data) {
      setResult(data?.allSpecies?.edges);
    }
  }, [data]);

  useEffect(() => {
    if (searchText) {
      if (data) {
        const filtered = data?.allSpecies?.edges?.filter((film) => {
          const combinedString =
            film?.node?.name +
            film?.node?.homeworld?.name +
            film?.node?.language +
            film?.node?.designation +
            film?.node?.classification;
          return combinedString
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
        if (filtered && filtered?.length > 0) {
          setResult(filtered);
        } else {
          setResult(data.allSpecies?.edges);
        }
      }
    } else {
      setResult(data?.allSpecies?.edges);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data ? (
        <>
          {result &&
            result.length > 0 &&
            result.map((specie) => (
              <SpeciesCard specie={specie?.node!} key={specie?.node?.id} />
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
