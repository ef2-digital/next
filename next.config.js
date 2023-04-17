const path = require('path');
const defaultTheme = require('tailwindcss/defaultTheme');
const withNextIntl = require('next-intl/plugin')('./i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = withNextIntl({
    images: {
        deviceSizes: Object.values(defaultTheme.screens).map((screen) => parseInt(screen)),
        domains: ['localhost']
    },
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        appDir: true
    },
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')]
    }
});

module.exports = nextConfig;
