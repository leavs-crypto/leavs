import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider, theme } from "@chakra-ui/react";
import { WithWalletConnect } from "../components/WithWalletConnect";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <WithWalletConnect>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </WithWalletConnect>
    </ChakraProvider>
  );
}

export default MyApp;
