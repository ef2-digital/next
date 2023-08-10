const { nextui } = require("@nextui-org/react");
/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './theme.ts',
        './config.tsx',
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@ef2/react/lib/**/*.{js,ts,jsx,tsx}',
        './node_modules/@ef2/content-components-react/lib/**/*.{js,ts,jsx,tsx}',
        './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem'
        },
        fontSize: {
            'h1-desktop': ['3.5rem', 1.2],
            'h1-mobile': ['2rem', 1.2],
            'h2-desktop': ['2.5rem', 1.2],
            'h2-mobile': ['2rem', 1.2],
            'h3-desktop': ['1.5rem', 1.3],
            'h3-mobile': ['1.25rem', 1.3],
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif']
        },
        extend: {
            colors: {
                primary: {
                    DEFAULT: '#312783',
                    50: '#4E40C6',
                    100: '#493AC2',
                    200: '#4335B2',
                    300: '#3D30A2',
                    400: '#372C93',
                    500: '#312783',
                    600: '#2B2273',
                    700: '#251E64',
                    800: '#1F1954',
                    900: '#191444',
                    950: '#17123C'
                },
                secondary: {
                    DEFAULT: '#009FE3',
                    50: '#40C6FF',
                    100: '#36C3FF',
                    200: '#21BDFF',
                    300: '#0DB6FF',
                    400: '#00ADF7',
                    500: '#009FE3',
                    600: '#0091CF',
                    700: '#0082BA',
                    800: '#0074A6',
                    900: '#006691',
                    950: '#005F87'
                },
                text: '#00212D',
                dark: '#00212D',
                background: '#E6E9EA'
            },
            keyframes: {
                'slide-down': {
                    from: { height: 0 },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'slide-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: 0 },
                },
            },
            animation: {
                'slide-down': 'slide-down 300ms cubic-bezier(0.87, 0, 0.13, 1)',
                'slide-up': 'slide-up 300ms cubic-bezier(0.87, 0, 0.13, 1)',
            },
        }
    },
    plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/typography'), nextui()]
};
