import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../apolloClient";
import { Header } from "../components/molecules/Header/Header";
import { Footer } from "../components/molecules/Footer/Footer";
import "../styles/nprogress.css";
import nProgress from "nprogress";
import { Router } from "next/router";

// configure nProgress events
Router.events.on("routeChangeStart", nProgress.start);
Router.events.on("routeChangeError", nProgress.done);
Router.events.on("routeChangeComplete", nProgress.done);

function MyApp({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <div className="flex flex-col  min-h-screen ">
        <Header />
        <main className="flex-grow w-full max-w-screen-xl mx-auto">
          <Component {...pageProps} />
        </main>
        <Footer />
      </div>
    </ApolloProvider>
  );
}

export default MyApp;
