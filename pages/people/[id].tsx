import { NextPage } from "next";
import React from "react";
import { getPeoplePageStaticPaths } from "../../components/staticPaths";
import { getPeoplePageStaticProps } from "../../components/staticProps";
import { PeopleDetailPage } from "../../components/templates/PeopleDetailPage/PeopleDetailPage";

const Peoplepage: NextPage = () => {
  return <PeopleDetailPage />;
};

export default Peoplepage;

export const getStaticPaths = getPeoplePageStaticPaths;

export const getStaticProps = getPeoplePageStaticProps;
