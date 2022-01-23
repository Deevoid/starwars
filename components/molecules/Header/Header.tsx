import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {};

export const Header = (props: Props) => {
  return (
    <header className="flex w-full items-center justify-center bg-transparent border rounded-md backdrop-blur-md">
      <Link href="/">
        <a>
          <Image src="/logo.svg" height={80} width={100} alt="logo" />
        </a>
      </Link>
    </header>
  );
};
