import { useQuery, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Loader } from "../../atoms/Loader";
import { globalSearchText } from "../../globalStates/GlobalSearchText";
import { FilmCard } from "../../molecules/FilmCard/FilmCard";
import { getAllFilmsQuery } from "./query";
import {
  AllFilms as AllFilmsType,
  AllFilms_allFilms_edges,
} from "./types/AllFilms";

type Props = {};

export const AllFilms = (props: Props) => {
  const { data } = useQuery<AllFilmsType>(getAllFilmsQuery, {
    variables: {
      first: 50,
    },
  });

  const searchText = useReactiveVar(globalSearchText);
  const [result, setResult] = useState<
    (AllFilms_allFilms_edges | null)[] | null | undefined
  >(null);

  useEffect(() => {
    if (data) {
      setResult(data?.allFilms?.edges);
    }
  }, [data]);

  useEffect(() => {
    if (searchText) {
      if (data) {
        const filtered = data?.allFilms?.edges?.filter((film) => {
          const combinedString = film?.node?.title + film?.node?.director;
          return combinedString
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
        if (filtered && filtered?.length > 0) {
          setResult(filtered);
        } else {
          setResult(data.allFilms?.edges);
        }
      }
    } else {
      setResult(data?.allFilms?.edges);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data ? (
        <>
          {result &&
            result.length > 0 &&
            result.map((film) => (
              <FilmCard film={film?.node!} key={film?.node?.id} />
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
