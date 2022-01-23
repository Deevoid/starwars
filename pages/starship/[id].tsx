import { NextPage } from "next";
import React from "react";
import { getStarshipsPageStaticPaths } from "../../components/staticPaths";
import { getStarshipPageStaticProps } from "../../components/staticProps";
import { StarshipDetailPage } from "../../components/templates/StarshipDetailPage/StarshipDetailPage";

const StarshipPage: NextPage = () => {
  return <StarshipDetailPage />;
};

export default StarshipPage;

export const getStaticPaths = getStarshipsPageStaticPaths;

export const getStaticProps = getStarshipPageStaticProps;
