import { useRouter } from "next/router";
import { LOCALE_DE, LOCALE_DEFAULT } from "@lib/constant";

export const useLocale = () => {
    const { asPath } = useRouter();

    const locale = asPath.includes(`/${LOCALE_DE}`) ? LOCALE_DE : LOCALE_DEFAULT;

    return {
        locale,
        isDefaultLocale: locale === LOCALE_DEFAULT,
    };
};
