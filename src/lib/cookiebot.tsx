import React from "react";
import Script from "next/script";

export const Cookiebot: React.FC = () => {
    return (
        <Script
            strategy="beforeInteractive"
            id="Cookiebot"
            src="https://consent.cookiebot.com/uc.js"
            data-cbid="a6418414-7b90-41f3-b2b7-bbabf4e317f0"
            data-blockingmode="auto"
            type="text/javascript"
        />
    );
};
