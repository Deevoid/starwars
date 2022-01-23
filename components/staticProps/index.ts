import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { GetStaticProps } from "next";
import { initializeApollo } from "../../apolloClient";
import { getAllFilmsQuery } from "../organisms/AllFilms/query";
import { getAllPeopleQuery } from "../organisms/AllPeople/query";
import { getAllPlanetsQuery } from "../organisms/AllPlanets/query";
import { getAllSpeciesQuery } from "../organisms/AllSpecies/query";
import { getAllStarshipsQuery } from "../organisms/AllStarships/query";
import { getAllVehiclesQuery } from "../organisms/AllVehicles/query";
import {
  getFilmQuery,
  getPersonQuery,
  getPlanetQuery,
  getSpeciesQuery,
  getStarshipQuery,
  getSVehicleQuery,
} from "./query";

export const getHomePageStaticProps: GetStaticProps = async () => {
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();

  const promises = [
    await apolloClient.query({
      query: getAllFilmsQuery,
      variables: {
        first: 50,
      },
    }),
    await apolloClient.query({
      query: getAllPlanetsQuery,
      variables: {
        first: 50,
      },
    }),
    await apolloClient.query({
      query: getAllPeopleQuery,
      variables: {
        first: 50,
      },
    }),
    await apolloClient.query({
      query: getAllSpeciesQuery,
      variables: {
        first: 50,
      },
    }),
    await apolloClient.query({
      query: getAllVehiclesQuery,
      variables: {
        first: 50,
      },
    }),
    await apolloClient.query({
      query: getAllStarshipsQuery,
      variables: {
        first: 50,
      },
    }),
  ];

  await Promise.all(promises);
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1800,
  };
};

export const getFilmPageStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  await apolloClient.query({
    query: getFilmQuery,
    variables: { id },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1800,
  };
};

export const getPeoplePageStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  await apolloClient.query({
    query: getPersonQuery,
    variables: { id },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1800,
  };
};

export const getPlanetPageStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  await apolloClient.query({
    query: getPlanetQuery,
    variables: { id },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1800,
  };
};

export const getSpeciesPageStaticProps: GetStaticProps = async ({ params }) => {
  const id = params?.id;
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  await apolloClient.query({
    query: getSpeciesQuery,
    variables: { id },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1800,
  };
};

export const getVehiclesPageStaticProps: GetStaticProps = async ({
  params,
}) => {
  const id = params?.id;
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  await apolloClient.query({
    query: getSVehicleQuery,
    variables: { id },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1800,
  };
};

export const getStarshipPageStaticProps: GetStaticProps = async ({
  params,
}) => {
  const id = params?.id;
  const apolloClient: ApolloClient<NormalizedCacheObject> = initializeApollo();
  await apolloClient.query({
    query: getStarshipQuery,
    variables: { id },
  });
  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 1800,
  };
};
