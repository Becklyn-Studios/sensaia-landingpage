import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getAppUrl } from "@lib/util";
import { LOCALE_DEFAULT } from "@lib/constant";

interface MetaProps {
    title: string;
    description: string;
    notFound?: boolean;
}

export const Meta: React.FC<MetaProps> = ({ title, description, notFound }) => {
    const { asPath } = useRouter();

    const appUrl = getAppUrl();
    const localizedUrl =
        appUrl +
        (asPath.includes(`/${LOCALE_DEFAULT}`)
            ? asPath.replace(`/${LOCALE_DEFAULT}`, "")
            : asPath);
    const url = localizedUrl.endsWith("/") ? localizedUrl.slice(0, -1) : localizedUrl;

    return (
        <Head>
            <title>{title}</title>
            {title && <meta name="title" content={title} />}
            {description && <meta name="description" content={description} />}

            {!notFound && <link rel="canonical" href={url} />}

            <link rel="apple-touch-icon" sizes="57x57" href="/meta/apple-icon-57x57.png" />
            <link rel="apple-touch-icon" sizes="60x60" href="/meta/apple-icon-60x60.png" />
            <link rel="apple-touch-icon" sizes="72x72" href="/meta/apple-icon-72x72.png" />
            <link rel="apple-touch-icon" sizes="76x76" href="/meta/apple-icon-76x76.png" />
            <link rel="apple-touch-icon" sizes="114x114" href="/meta/apple-icon-114x114.png" />
            <link rel="apple-touch-icon" sizes="120x120" href="/meta/apple-icon-120x120.png" />
            <link rel="apple-touch-icon" sizes="144x144" href="/meta/apple-icon-144x144.png" />
            <link rel="apple-touch-icon" sizes="152x152" href="/meta/apple-icon-152x152.png" />
            <link rel="apple-touch-icon" sizes="180x180" href="/meta/apple-icon-180x180.png" />
            <link
                rel="icon"
                type="image/png"
                sizes="192x192"
                href="/meta/android-icon-192x192.png"
            />
            <link rel="icon" type="image/png" sizes="32x32" href="/meta/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="96x96" href="/meta/favicon-96x96.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/meta/favicon-16x16.png" />
            <link rel="manifest" href="/meta/manifest.json" />
            <meta name="msapplication-TileColor" content="#ffffff" />
            <meta name="msapplication-TileImage" content="/meta/ms-icon-144x144.png" />
            <meta name="theme-color" content="#ffffff" />
        </Head>
    );
};
