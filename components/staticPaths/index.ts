import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GetStaticPaths } from "next";
import { initializeApollo } from "../../apolloClient";
import {
  getAllFilmsQuery,
  getAllPeopleQuery,
  getAllPlanetsQuery,
  getAllSpeciesQuery,
  getAllStarshipsQuery,
  getAllVehiclesQuery,
} from "./query";
import { AllFilmsPaths } from "./types/AllFilmsPaths";
import { AllPeoplePaths } from "./types/AllPeoplePaths";
import { AllPlanetsPaths } from "./types/AllPlanetsPaths";
import { AllSpeciesPaths } from "./types/AllSpeciesPaths";
import { AllStarshipsPaths } from "./types/AllStarshipsPaths";
import { AllVehiclesPaths } from "./types/AllVehiclesPaths";

// all Films
export const getFilmPageStaticPaths: GetStaticPaths = async () => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  const { data } = await apolloClient.query<AllFilmsPaths>({
    query: getAllFilmsQuery,
    variables: {
      first: 100,
    },
  });
  const paths = data.allFilms?.edges?.map((edge) => ({
    params: {
      id: edge?.node?.id,
    },
  }));

  return { paths: paths!, fallback: true };
};

// all people
export const getPeoplePageStaticPaths: GetStaticPaths = async () => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  const { data } = await apolloClient.query<AllPeoplePaths>({
    query: getAllPeopleQuery,
    variables: {
      first: 100,
    },
  });
  const paths = data.allPeople?.edges?.map((edge) => ({
    params: {
      id: edge?.node?.id,
    },
  }));

  return { paths: paths!, fallback: true };
};

// all planets
export const getPlanetPageStaticPaths: GetStaticPaths = async () => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  const { data } = await apolloClient.query<AllPlanetsPaths>({
    query: getAllPlanetsQuery,
    variables: {
      first: 100,
    },
  });
  const paths = data.allPlanets?.edges?.map((edge) => ({
    params: {
      id: edge?.node?.id,
    },
  }));

  return { paths: paths!, fallback: true };
};

// all species
export const getSpeciesPageStaticPaths: GetStaticPaths = async () => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  const { data } = await apolloClient.query<AllSpeciesPaths>({
    query: getAllSpeciesQuery,
    variables: {
      first: 100,
    },
  });
  const paths = data.allSpecies?.edges?.map((edge) => ({
    params: {
      id: edge?.node?.id,
    },
  }));

  return { paths: paths!, fallback: true };
};

// all vehicles
export const getVehiclesPageStaticPaths: GetStaticPaths = async () => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  const { data } = await apolloClient.query<AllVehiclesPaths>({
    query: getAllVehiclesQuery,
    variables: {
      first: 100,
    },
  });
  const paths = data.allVehicles?.edges?.map((edge) => ({
    params: {
      id: edge?.node?.id,
    },
  }));

  return { paths: paths!, fallback: true };
};

// all starships
export const getStarshipsPageStaticPaths: GetStaticPaths = async () => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  const { data } = await apolloClient.query<AllStarshipsPaths>({
    query: getAllStarshipsQuery,
    variables: {
      first: 100,
    },
  });
  const paths = data.allStarships?.edges?.map((edge) => ({
    params: {
      id: edge?.node?.id,
    },
  }));

  return { paths: paths!, fallback: true };
};
