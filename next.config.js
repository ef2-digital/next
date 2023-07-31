const defaultTheme = require('tailwindcss/defaultTheme');

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
    images: {
        deviceSizes: Object.values(defaultTheme.screens).map((screen) => parseInt(screen)),
        domains: ['localhost', '127.0.0.1']
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        esmExternals: 'loose',
        appDir: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    async redirects() {
        const body = JSON.stringify({ query: "query { generalSetting { data { attributes { redirects { id source destination } } } } }" });
        const response = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/graphql`, {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body
        });

        const data = await response.json();
        const redirects = data?.data?.generalSetting?.data?.attributes?.redirects;

        if (!redirects) {
            return [];
        }

        return redirects.map(redirect => ({
            source: redirect.source,
            destination: redirect.destination,
            permanent: true
        }));
    },
};

module.exports = nextConfig