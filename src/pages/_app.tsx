import React, { useEffect } from "react";
import { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { theme } from "@css/theme";
import { GlobalStyle } from "@css/GlobalStyle";
import { appWithTranslation } from "next-i18next";
import AOS from "aos";
import "aos/dist/aos.css";

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    );
};

export default appWithTranslation(App);
