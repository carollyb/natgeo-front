import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";
import GlobalProvider from "../context/GlobalProvider";
import HeaderComponent from "../partials/Header/Header";
import FooterComponent from "../partials/Footer/Footer";

function MyApp({ Component, pageProps }: AppProps,) {
    return (
        <GlobalProvider>
            <ChakraProvider theme={theme}>
                <HeaderComponent />
                <Component {...pageProps} />
                <FooterComponent />
            </ChakraProvider>
        </GlobalProvider>
    );
}

export default MyApp;