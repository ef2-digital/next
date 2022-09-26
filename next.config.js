const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        deviceSizes: Object.values(defaultTheme.screens).map((screen) => parseInt(screen))
        // domains: ['content.woonboulevard-veenendaal.midge.ef2.builders']
    },
    reactStrictMode: true,
    swcMinify: true
};

module.exports = nextConfig;
