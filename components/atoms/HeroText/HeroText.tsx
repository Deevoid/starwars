import React from "react";

type Props = {};

export const HeroText = (props: Props) => {
  return (
    <h1 className="font-black text-center text-transparent md:leading-[1.3] text-2xl md:text-6xl bg-clip-text bg-gradient-to-r from-rose-400 via-fuchsia-500 to-indigo-500">
      May the Force be with you
    </h1>
  );
};
