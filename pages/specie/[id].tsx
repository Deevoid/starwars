import { NextPage } from "next";
import React from "react";
import { getSpeciesPageStaticPaths } from "../../components/staticPaths";
import { getSpeciesPageStaticProps } from "../../components/staticProps";
import { SpeciesDetailPage } from "../../components/templates/SpeciesDetailPage/SpeciesDetailPage";

const SpeciesPage: NextPage = () => {
  return <SpeciesDetailPage />;
};

export default SpeciesPage;

export const getStaticPaths = getSpeciesPageStaticPaths;

export const getStaticProps = getSpeciesPageStaticProps;
