import { NextPage } from "next";
import React from "react";
import { getPlanetPageStaticPaths } from "../../components/staticPaths";
import { getPlanetPageStaticProps } from "../../components/staticProps";
import { PlanetDetailPage } from "../../components/templates/PlanetDetailPage/PlanetDetailPage";

const PlanetPage: NextPage = () => {
  return <PlanetDetailPage />;
};

export default PlanetPage;

export const getStaticPaths = getPlanetPageStaticPaths;

export const getStaticProps = getPlanetPageStaticProps;
