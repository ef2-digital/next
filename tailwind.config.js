/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './theme.ts',
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@ef2/react/lib/**/*.{js,ts,jsx,tsx}'
    ],
    theme: {
        container: {
            center: true,
            padding: '1rem'
        },
        fontFamily: {
            inter: ['Inter', 'sans-serif']
        },
        extend: {
            colors: {
                // use tailwindshades.com with the settings, step up/set down: 4. hue shift: 0.
                primary: {
                    DEFAULT: '#3B82F6',
                    50: '#EBF2FE',
                    100: '#D7E6FD',
                    200: '#B0CDFB',
                    300: '#89B4FA',
                    400: '#629BF8',
                    500: '#3B82F6',
                    600: '#0B61EE',
                    700: '#084BB8',
                    800: '#063583',
                    900: '#041F4D'
                },
                secondary: {
                    DEFAULT: '#00212D',
                    50: '#006489',
                    100: '#005D7F',
                    200: '#004E6A',
                    300: '#003F56',
                    400: '#003041',
                    500: '#00212D',
                    600: '#001219',
                    700: '#000304',
                    800: '#000000',
                    900: '#000000'
                },
                text: '#a1a1aa',
                dark: '#282626'
            }
        }
    },
    plugins: [require('@headlessui/tailwindcss')]
};
