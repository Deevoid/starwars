import { useQuery, useReactiveVar } from "@apollo/client";
import React, { useEffect, useState } from "react";
import { Loader } from "../../atoms/Loader";
import { globalSearchText } from "../../globalStates/GlobalSearchText";
import { VehiclesCard } from "../../molecules/VehiclesCard/VehiclesCard";
import { AllStarships_allStarships_edges } from "../AllStarships/types/AllStarships";
import { getAllVehiclesQuery } from "./query";
import {
  AllVehicles as AllVehiclesTypes,
  AllVehicles_allVehicles_edges,
} from "./types/AllVehicles";

type Props = {};

export const AllVehicles = (props: Props) => {
  const { data } = useQuery<AllVehiclesTypes>(getAllVehiclesQuery, {
    variables: {
      first: 50,
    },
  });

  const searchText = useReactiveVar(globalSearchText);
  const [result, setResult] = useState<
    (AllVehicles_allVehicles_edges | null)[] | null | undefined
  >(null);

  useEffect(() => {
    if (data) {
      setResult(data?.allVehicles?.edges);
    }
  }, [data]);

  useEffect(() => {
    if (searchText) {
      if (data) {
        const filtered = data?.allVehicles?.edges?.filter((film) => {
          const combinedString =
            film?.node?.name + film?.node?.model + film?.node?.vehicleClass;
          return combinedString
            .toLowerCase()
            .includes(searchText.toLowerCase());
        });
        if (filtered && filtered?.length > 0) {
          setResult(filtered);
        } else {
          setResult(data.allVehicles?.edges);
        }
      }
    } else {
      setResult(data?.allVehicles?.edges);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {data ? (
        <>
          {result &&
            result.length > 0 &&
            result.map((vehicle) => (
              <VehiclesCard vehicle={vehicle?.node!} key={vehicle?.node?.id} />
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
