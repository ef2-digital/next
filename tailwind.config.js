/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './theme.ts',
        './app/**/*.{js,ts,jsx,tsx}',
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
        './node_modules/@ef2/react/lib/**/*.{js,ts,jsx,tsx}',
        './node_modules/@ef2/content-components-react/lib/**/*.{js,ts,jsx,tsx}'
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
                primary: {
                    DEFAULT: '#00212D',
                    50: '#006489',
                    100: '#005D7F',
                    200: '#004E6A',
                    300: '#003F56',
                    400: '#003041',
                    500: '#00212D',
                    600: '#001219',
                    700: '#000304'
                },
                secondary: {
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
                text: '#00212D',
                dark: '#00212D',
                background: '#E6E9EA'
            }
        }
    },
    plugins: [require('@headlessui/tailwindcss'), require('@tailwindcss/typography')]
};
