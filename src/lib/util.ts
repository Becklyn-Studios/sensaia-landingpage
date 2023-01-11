export const getAppUrl = () => {
    const appUrl = process.env.NEXT_PUBLIC_APP_URL;

    if (!appUrl) {
        throw new Error("Environment variable NEXT_PUBLIC_APP_URL is undefined");
    }

    return appUrl;
};
