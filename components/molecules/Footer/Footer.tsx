import Link from "next/link";
import React from "react";

type Props = {};

export const Footer = (props: Props) => {
  return (
    <footer className="flex  bg-gray-800 text-sm p-1 w-full text-gray-400 items-center justify-center border">
      <span>Made by </span>{" "}
      <a
        className="ml-2 text-indigo-300 animate-pulse"
        href="https://deevoid.netlify.app/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Dev
      </a>
    </footer>
  );
};
