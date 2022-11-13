import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";
import HeaderComponent from "../components/Header/Header";
import FooterComponent from "../components/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps,) {
  return (
    <ChakraProvider theme={theme}>
      <HeaderComponent />
      <Component {...pageProps} />
      <FooterComponent />
    </ChakraProvider>
  );
}

export default MyApp;