const ms = require('ms');
const defaultTheme = require('tailwindcss/defaultTheme');
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
    images: {
        deviceSizes: Object.values(defaultTheme.screens).map((screen) => parseInt(screen)),
        domains: ['localhost', '127.0.0.1']
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        esmExternals: 'loose',
        appDir: true
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    headers() {
        return [
            {
                // Cache all content pages
                source: '/((?!_next|assets|favicon.ico).*)',
                headers: [
                    {
                        key: 'Cache-Control',
                        value: [
                            `s-maxage=` + ms('1d') / 1000,
                            `stale-while-revalidate=` + ms('1y') / 1000
                        ].join(', ')
                    }
                ],

                // If you're deploying on a host that doesn't support the `vary` header (e.g. Vercel),
                // make sure to disable caching for prefetch requests for Server Components.
                missing: [
                    {
                        type: 'header',
                        key: 'Next-Router-Prefetch'
                    }
                ]
            }
        ];
    }
});

module.exports = nextConfig;
