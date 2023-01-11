import Script from "next/script";
import Document, { DocumentContext, Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head />
                <body>
                    <noscript>
                        <iframe
                            src="https://www.googletagmanager.com/ns.html?id=GTM-NZ7MSZ5"
                            height="0"
                            width="0"
                            style={{ display: "none", visibility: "hidden" }}
                        />
                    </noscript>
                    <Main />
                    <NextScript />
                    <Script
                        strategy="beforeInteractive"
                        id="Cookiebot"
                        src="https://consent.cookiebot.com/uc.js"
                        data-cbid="a6418414-7b90-41f3-b2b7-bbabf4e317f0"
                        data-blockingmode="auto"
                        type="text/javascript"
                    />
                </body>
            </Html>
        );
    }
}
