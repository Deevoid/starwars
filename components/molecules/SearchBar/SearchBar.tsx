import { useReactiveVar } from "@apollo/client";
import React, { useCallback, useEffect, useState } from "react";
import { globalCategoryState } from "../../globalStates/GlobalCategoryState";
import { globalSearchText } from "../../globalStates/GlobalSearchText";
type Props = {};

export const SearchBar = (props: Props) => {
  const globalCategory = useReactiveVar(globalCategoryState);

  useEffect(() => {
    setInput("");
    globalSearchText("");
  }, [globalCategory]);

  const setGlobalSearchText = (value: string) => globalSearchText(value);

  const [input, setInput] = useState("");
  return (
    <>
      <div className=" mt-1 relative md:sticky md:top-80">
        <input
          value={input}
          onChange={(event) => {
            setInput(event?.target.value);
            setGlobalSearchText(event.target.value);
          }}
          type="text"
          id="email-adress-icon"
          className="bg-gray-50 border border-gray-300 text-gray-900
           text-sm rounded-lg focus:ring-indigo-500 focus:border-indigo-500 block w-full 
           p-2.5"
          placeholder={`Search ${globalCategory}`}
        />
        <div className="flex absolute inset-y-0 right-0 items-center pr-3 pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </div>
      </div>
    </>
  );
};
