import { useQuery } from "@apollo/client";
import React from "react";
import { PeopleCard } from "../../molecules/PeopleCard/PeopleCard";
import { getAllPeopleQuery } from "./query";
import { AllPeople as AllPeopleType } from "./types/AllPeople";

type Props = {};

export const AllPeople = (props: Props) => {
  const { data } = useQuery<AllPeopleType>(getAllPeopleQuery, {
    variables: {
      first: 20,
    },
  });

  console.log(data);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data &&
        data.allPeople?.edges?.map((people) => (
          <PeopleCard key={people?.node?.id} people={people?.node!} />
        ))}
    </div>
  );
};
