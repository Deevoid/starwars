import Link from "next/link";
import React from "react";
import { AllVehicles_allVehicles_edges_node } from "../../organisms/AllVehicles/types/AllVehicles";

type Props = {
  vehicle: AllVehicles_allVehicles_edges_node;
};

export const VehiclesCard = (props: Props) => {
  const { vehicle } = props;
  return (
    <div className="rounded-md border p-4 relative flex flex-col">
      <p className="font-bold text-2xl mb-2 underline decoration-pink-500 decoration-dashed">
        {vehicle.name}
      </p>
      <p className="text-zinc-600 mb-2 capitalize">{vehicle.model}</p>
      <p className="">
        Class:{" "}
        <span className=" capitalize font-medium">{vehicle.vehicleClass}</span>
      </p>
      {vehicle.manufacturers && vehicle.manufacturers.length > 0 && (
        <p className="mb-4">
          Manufacturers:{" "}
          {vehicle.manufacturers.map((manufacturer, index) => (
            <span key={manufacturer} className=" capitalize font-medium">
              {manufacturer}
              {index < vehicle!.manufacturers!.length - 1 && ", "}
            </span>
          ))}
        </p>
      )}
      {vehicle.consumables && (
        <p className="mb-4">
          Consumables support:{" "}
          <span className=" capitalize font-medium">{vehicle.consumables}</span>
        </p>
      )}

      <Link href={`/vehicle/${vehicle.id}`}>
        <a className="flex items-center mt-auto cursor-pointer text-indigo-600 text-sm font-medium ">
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
