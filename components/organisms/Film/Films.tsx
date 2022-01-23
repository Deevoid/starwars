import { useQuery } from "@apollo/client";
import React from "react";
import { getAllFilmsQuery } from "./query";
import { AllFilms } from "./types/AllFilms";

type Props = {};

export const Films = (props: Props) => {
  const { data } = useQuery<AllFilms>(getAllFilmsQuery);
  console.log(data?.allFilms?.edges);
  return <div>All Filsm</div>;
};
