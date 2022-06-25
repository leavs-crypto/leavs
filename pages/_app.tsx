import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { WithWalletConnect } from "../components/WithWalletConnect";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <WithWalletConnect>
        <Component {...pageProps} />
      </WithWalletConnect>
    </ChakraProvider>
  );
}

export default MyApp;
