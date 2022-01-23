import { NextPage } from "next";
import React from "react";
import { getVehiclesPageStaticPaths } from "../../components/staticPaths";
import { getVehiclesPageStaticProps } from "../../components/staticProps";
import { VehiclesDetailPage } from "../../components/templates/VehiclesDetailPage/VehiclesDetailPage";

const VehiclesPage: NextPage = () => {
  return <VehiclesDetailPage />;
};

export default VehiclesPage;

export const getStaticPaths = getVehiclesPageStaticPaths;

export const getStaticProps = getVehiclesPageStaticProps;
