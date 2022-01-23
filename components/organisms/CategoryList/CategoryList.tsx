import { useReactiveVar } from "@apollo/client";
import Image from "next/image";
import React, { useState } from "react";
import { getCategoryImage } from "../../../utils";
import { globalCategoryState } from "../../globalStates/GlobalCategoryState";
import { SearchBar } from "../../molecules/SearchBar/SearchBar";

type Props = {};

const categoryArray = [
  "Films",
  "People",
  "Planets",
  "Starships",
  "Vehicles",
  "Species",
];

export enum CategoryEnum {
  "Films" = "Films",
  "People" = "People",
  "Planets" = "Planets",
  "Starships" = "Starships",
  "Vehicles" = "Vehicles",
  "Species" = "Species",
}

export const CategoryList = (props: Props) => {
  const globalCategory = useReactiveVar(globalCategoryState);

  return (
    <div className="sticky top-0 py-3 gap-2 md:gap-0 md:py-0 bg-white z-10 md:top-10">
      <div
        className="md:rounded-md overflow-scroll md:overflow-hidden md:border flex flex-nowrap
         md:flex-col md:divide-y md:min-w-[200px]
     h-fit sticky top-0 py-3 gap-2 md:gap-0 md:py-0 bg-white z-10 md:top-10"
      >
        {categoryArray.map((category) => (
          <div
            key={category}
            className={`p-2 font-medium flex items-center md:justify-between flex-shrink-0
           rounded-full md:rounded-none
           border md:border-0
             cursor-pointer
            hover:bg-gray-200 transition-colors duration-300 ${
              category === globalCategory
                ? "bg-indigo-500 text-white hover:bg-indigo-500"
                : ""
            }`}
            onClick={() => {
              globalCategoryState(category);
            }}
          >
            {category}
            <span className="ml-2 h-[25px] flex-grow-0 align-baseline">
              <Image
                src={getCategoryImage(category)}
                height={25}
                width={25}
                alt="category icon"
              />
            </span>
          </div>
        ))}
      </div>
      <SearchBar />
    </div>
  );
};
