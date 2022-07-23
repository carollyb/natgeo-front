import type { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../config/theme";
import GlobalProvider from "../context/GlobalProvider";

function MyApp({ Component, pageProps }: AppProps,) {
    return (
        <GlobalProvider>
            <ChakraProvider theme={theme}>
                <Component {...pageProps} />
            </ChakraProvider>
        </GlobalProvider>
    );
}

export default MyApp;