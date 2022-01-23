import Link from "next/link";
import React from "react";
import { AllFilms_allFilms_edges_node } from "../../organisms/AllFilms/types/AllFilms";

type Props = {
  film: AllFilms_allFilms_edges_node;
};

export const FilmCard = (props: Props) => {
  const { film } = props;
  return (
    <div className="rounded-md border p-4 relative ">
      <p className="font-bold text-2xl mb-2 underline decoration-pink-500 decoration-dashed">
        {film.title}
      </p>
      <p
        className="text- text-base text-zinc-600 mb-4"
        dangerouslySetInnerHTML={{
          __html: `${film.openingCrawl?.substring(0, 200)!}...`,
        }}
      />
      <p className="text-zinc-600 mb-2">
        Released on{" "}
        <span className="font-medium text-zinc-800">{film.releaseDate}</span> by{" "}
        <span className="text-zinc-800 font-medium underline decoration-green-500 decoration-wavy decoration-1">
          {film.director}
        </span>
      </p>
      <Link href={`/film/${film.id}`}>
        <a className="flex items-center cursor-pointer text-indigo-600 text-sm font-medium ">
          Read more
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
