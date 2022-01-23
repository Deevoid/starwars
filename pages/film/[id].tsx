import { NextPage } from "next";
import React from "react";
import { getFilmPageStaticPaths } from "../../components/staticPaths";
import { getFilmPageStaticProps } from "../../components/staticProps";
import { FilmDetailPage } from "../../components/templates/FilmDetailPage/FilmDetailPage";

const FilmPage: NextPage = ({}) => {
  return <FilmDetailPage />;
};

export default FilmPage;

export const getStaticPaths = getFilmPageStaticPaths;

export const getStaticProps = getFilmPageStaticProps;
