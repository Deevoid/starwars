import React from "react";

interface Props {
  title?: string | null;
  subtitle?: string | null;
  description?: string | null;
  primaryInfo?: { [key: string]: any[] };
  secondaryInfo?: { [key: string]: any[] };
}

export const DetailCard = (props: Props) => {
  const { title, subtitle, description, primaryInfo, secondaryInfo } = props;

  function renderInfo(info: { [key: string]: any[] }) {
    return Object.entries(info).map(([key, value]) => {
      return (
        <>
          {value && value.length > 0 && (
            <p className="mb-2 capitalize text-left">
              <span className="text-zinc-500">{key}: </span>
              <span className="font-medium italic">
                {value &&
                  value.map((val, index) => {
                    return (
                      <>
                        {val}
                        {index < value.length - 1 && ", "}
                      </>
                    );
                  })}
              </span>
            </p>
          )}
        </>
      );
    });
  }

  return (
    <div className="text-center">
      <div
        className="bg-gradient-to-r from-slate-800 via-purple-900 to-slate-800 h-40
      flex items-end justify-center mb-20
      "
      >
        <div className="rounded-full h-24 w-24 md:h-32 md:w-32 bg-fuchsia-800 -mb-12 md:-mb-16 border-4 border-white"></div>
      </div>
      <div className="p-4">
        <h1 className="text-center text-2xl mb-5 md:text-4xl underline-offset-8 font-bold uppercase decoration-amber-500 underline decoration-wavy">
          {title}
        </h1>
        <p className=" text-zinc-500 mb-4 capitalize">{subtitle}</p>
        <p className="">{description}</p>
        <hr className="h-2 my-5 " />
        <div className="mb-4">{renderInfo(primaryInfo!)}</div>
        <hr className="h-2 my-5 " />
        <div className="mb-4">{renderInfo(secondaryInfo!)}</div>
      </div>
    </div>
  );
};
