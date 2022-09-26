import { Head, Html, Main, NextScript } from 'next/document';

const Document = () => {
    return (
        <Html lang="nl">
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Bungee&family=Montserrat:wght@400;700&display=swap" />
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <meta name="theme-color" content="#063B7D" />
                <meta name="color-scheme" content="light" />
            </Head>
            <body className="bg-tertiary-500 bg-radial-mobile bg-fixed pt-[5rem] md:overflow-visible md:bg-radial-desktop md:pt-[6rem]">
                <Main />
                <NextScript />
            </body>
        </Html>
    );
};

export default Document;
