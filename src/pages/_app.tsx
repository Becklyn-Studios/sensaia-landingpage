import React from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@css/theme";
import { GlobalStyle } from "@css/GlobalStyle";
import { appWithTranslation } from "next-i18next";
import { Google } from "@lib/google";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Google />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default appWithTranslation(App);
