import { useQuery, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Loader } from "../../atoms/Loader";
import { globalSearchText } from "../../globalStates/GlobalSearchText";
import { PeopleCard } from "../../molecules/PeopleCard/PeopleCard";
import { AllFilms_allFilms_edges } from "../AllFilms/types/AllFilms";
import { getAllPeopleQuery } from "./query";
import {
  AllPeople as AllPeopleType,
  AllPeople_allPeople_edges,
} from "./types/AllPeople";

type Props = {};

export const AllPeople = (props: Props) => {
  const { data } = useQuery<AllPeopleType>(getAllPeopleQuery, {
    variables: {
      first: 20,
    },
  });

  const searchText = useReactiveVar(globalSearchText);
  const [result, setResult] = useState<
    (AllPeople_allPeople_edges | null)[] | null | undefined
  >(null);

  useEffect(() => {
    if (data) {
      setResult(data?.allPeople?.edges);
    }
  }, [data]);

  useEffect(() => {
    if (searchText) {
      if (data) {
        const filtered = data?.allPeople?.edges?.filter((film) => {
          const combinedString = film?.node?.name + film?.node?.homeworld;
          return combinedString
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
        if (filtered && filtered?.length > 0) {
          setResult(filtered);
        } else {
          setResult(data.allPeople?.edges);
        }
      }
    } else {
      setResult(data?.allPeople?.edges);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data ? (
        <>
          {result &&
            result.length > 0 &&
            result.map((people) => (
              <PeopleCard key={people?.node?.id} people={people?.node!} />
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
