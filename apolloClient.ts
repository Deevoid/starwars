import { useMemo } from "react";
import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  InMemoryCache,
  NormalizedCacheObject,
} from "@apollo/client";

let apolloClient: ApolloClient<NormalizedCacheObject>;
const url = "https://swapi-graphql.netlify.app/.netlify/functions/index";
const link = ApolloLink.from([createHttpLink({ uri: url })]);

const createApolloClient = (): ApolloClient<NormalizedCacheObject> =>
  new ApolloClient({
    cache: new InMemoryCache(),
    link,
    ssrMode: typeof window === "undefined", // set to true for SSR
  });

export const initializeApollo = ({
  initialState = null,
}: {
  initialState?: NormalizedCacheObject | null;
} = {}): ApolloClient<NormalizedCacheObject> => {
  const localApolloClient = apolloClient ?? createApolloClient();

  // If your page has Next.js data fetching methods that use Apollo Client, the initial state
  // gets hydrated here
  if (initialState) {
    // Get existing cache, loaded during client side data fetching
    const existingCache = localApolloClient.extract();

    // Restore the cache with the merged data
    localApolloClient.cache.restore({ ...existingCache, ...initialState });
  }

  // For SSG and SSR always create a new Apollo Client
  if (typeof window === "undefined") return localApolloClient;

  // Create the Apollo Client once in the client
  if (!apolloClient) apolloClient = localApolloClient;

  return localApolloClient;
};

export const useApollo = (
  initialState: NormalizedCacheObject
): ApolloClient<NormalizedCacheObject> => {
  const store = useMemo<ApolloClient<NormalizedCacheObject>>(
    () => initializeApollo({ initialState }),
    [initialState]
  );
  return store;
};
