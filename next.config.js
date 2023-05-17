const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig;
