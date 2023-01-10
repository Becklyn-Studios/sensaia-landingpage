import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getAppUrl } from "@lib/util";
import { DEFAULT_LOCALE } from "@lib/constant";

interface MetaProps {
    title: string;
    description: string;
    notFound?: boolean;
}

export const Meta: React.FC<MetaProps> = ({ title, description, notFound }) => {
    const { asPath, locale } = useRouter();

    const appUrl = getAppUrl();
    const url =
        appUrl +
        (locale !== DEFAULT_LOCALE ? "/" + locale : "") +
        (asPath.endsWith("/") ? asPath.slice(0, -1) : asPath);

    return (
        <Head>
            <title>{title}</title>
            {title && <meta name="title" content={title} />}
            {description && <meta name="description" content={description} />}

            {!notFound && <link rel="canonical" href={url} />}
        </Head>
    );
};
