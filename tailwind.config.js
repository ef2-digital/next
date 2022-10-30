/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './theme.ts',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@ef2-digital/react/lib/**/*.js'
    ],
    theme: {
        fontSize: {
            sm: ['.9375rem', 1.5],
            base: ['1rem', 1.5],
            lg: ['1.125rem', 1.5],
            xl: ['1.25rem', 1],
            '2xl': ['1.625rem', 1],
            '3xl': ['2rem', 1],
            '4xl': ['3rem', 1]
        },
        container: {
            center: true,
            padding: '1rem'
        },
        // fontWeight: {
        //     normal: 400,
        //     bold: 700
        // },
        fontFamily: {
            inter: ['Inter', 'sans-serif']
        },
        extend: {
            colors: {
                // use tailwindshades.com with the settings, step up/set down: 4. hue shift: 0.
                primary: {
                    DEFAULT: '#FF7A00',
                    50: '#FFAA5C',
                    100: '#FFA552',
                    200: '#FF9A3D',
                    300: '#FF8F29',
                    400: '#FF8514',
                    500: '#FF7A00',
                    600: '#EB7000',
                    700: '#D66600',
                    800: '#C25D00',
                    900: '#AD5300'
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
