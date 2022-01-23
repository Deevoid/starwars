import Link from "next/link";
import React from "react";
import { AllSpecies_allSpecies_edges_node } from "../../organisms/AllSpecies/types/AllSpecies";

type Props = {
  specie: AllSpecies_allSpecies_edges_node;
};

export const SpeciesCard = (props: Props) => {
  const { specie } = props;
  return (
    <div className="rounded-md border p-4 relative flex flex-col">
      <p className="font-bold text-2xl mb-2 underline decoration-pink-500 decoration-dashed">
        {specie.name}
      </p>
      <p className="text-zinc-600 mb-2 capitalize">{specie.classification}</p>
      <p className="">
        Designation:{" "}
        <span className=" capitalize font-medium">{specie.designation}</span>
      </p>
      {specie.homeworld && (
        <p className="">
          Planet:{" "}
          <span className=" capitalize font-medium">
            {specie.homeworld?.name}
          </span>
        </p>
      )}
      <p className="mb-4">
        Language:{" "}
        <span className=" capitalize font-medium">{specie.language}</span>
      </p>

      <Link href={`/specie/${specie.id}`}>
        <a className="flex items-center mt-auto cursor-pointer text-indigo-600 text-sm font-medium ">
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
