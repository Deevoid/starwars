import Link from "next/link";
import React from "react";
import { AllPeople_allPeople_edges_node } from "../../organisms/AllPeople/types/AllPeople";

type Props = {
  people: AllPeople_allPeople_edges_node;
};

export const PeopleCard = (props: Props) => {
  const { people } = props;
  return (
    <div className="rounded-md border p-4 relative ">
      <p className="font-bold text-2xl mb-2 underline decoration-pink-500 decoration-dashed">
        {people.name}
      </p>
      <p className="text-zinc-600 mb-2 capitalize">{people.gender}</p>
      <p>Born: {people.birthYear}</p>
      <p className="mb-4">
        Planet: <span>{people.homeworld?.name}</span>
      </p>

      <Link href={`/people/${people.id}`}>
        <a className="flex items-center cursor-pointer text-indigo-600 text-sm font-medium ">
          View profile
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1 fill-indigo-600 "
            viewBox="0 0 18 18"
            fill="currentColor "
          >
            <path
              fillRule="evenodd"
              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </Link>
    </div>
  );
};
