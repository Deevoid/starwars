import { useQuery } from "@apollo/client";
import React from "react";
import { FilmCard } from "../../molecules/FilmCard/FilmCard";
import { getAllFilmsQuery } from "./query";
import { AllFilms as AllFilmsType } from "./types/AllFilms";

type Props = {};

export const AllFilms = (props: Props) => {
  const { data } = useQuery<AllFilmsType>(getAllFilmsQuery, {
    variables: {
      first: 50,
    },
  });
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data &&
        data.allFilms?.edges?.map((film) => (
          <FilmCard film={film?.node!} key={film?.node?.id} />
        ))}
    </div>
  );
};
