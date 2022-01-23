import { spawn } from "child_process";
import Link from "next/link";
import React from "react";
import { AllPlanets_allPlanets_edges_node } from "../../organisms/AllPlanets/types/AllPlanets";

type Props = {
  planet: AllPlanets_allPlanets_edges_node;
};

export const PlanetCard = (props: Props) => {
  const { planet } = props;
  return (
    <div className="rounded-md border p-4 relative flex flex-col">
      <p className="font-bold text-2xl mb-2 underline decoration-pink-500 decoration-dashed">
        {planet.name}
      </p>
      {planet.population && (
        <p className="text-zinc-600 mb-2 capitalize">
          Population: {planet.population?.toLocaleString()}
        </p>
      )}

      {planet.terrains && planet.terrains.length > 0 && (
        <p>
          Terrain:{" "}
          {planet.terrains?.map((terrains, index) => (
            <span className=" capitalize font-medium" key={terrains}>
              {terrains}
              {index < planet.terrains!.length - 1 && ", "}
            </span>
          ))}
        </p>
      )}
      {planet.climates && planet.climates?.length > 0 && (
        <p>
          Climate:{" "}
          {planet.climates?.map((climate, index) => (
            <span className=" capitalize font-medium" key={climate}>
              {climate}
              {index < planet.climates!.length - 1 && ", "}
            </span>
          ))}
        </p>
      )}
      <p className="mb-4">
        Water: <span>{planet.surfaceWater}%</span>
      </p>

      <Link href={`/planet/${planet.id}`}>
        <a className="flex items-center cursor-pointer mt-auto text-indigo-600 text-sm font-medium ">
          View more
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
