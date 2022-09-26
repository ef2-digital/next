/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
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
        fontWeight: {
            normal: 400,
            bold: 700
        },
        fontFamily: {
            bungee: ['Bungee', 'sans-serif'],
            montserrat: ['Montserrat', 'sans-serif']
        },
        colors: {
            white: '#ffffff',
            transparent: 'transparent',
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
                DEFAULT: '#EB0037',
                50: '#FF4873',
                100: '#FF3E6B',
                200: '#FF295B',
                300: '#FF154C',
                400: '#FF003C',
                500: '#EB0037',
                600: '#D70032',
                700: '#C2002D',
                800: '#AE0029',
                900: '#990024'
            }
        },
        extend: {}
    },
    plugins: []
};
