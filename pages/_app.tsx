import { NextPage } from 'next';
import type { AppProps as NextAppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { ParallaxProvider } from 'react-scroll-parallax';
import 'styles/globals.scss';
// import 'swiper/css';

export type NextPageWithLayout<T = {}> = NextPage<T> & {
    getLayout?: (page: ReactElement, pageProps: T) => ReactNode;
};

interface AppProps<T = {}> extends NextAppProps<T> {
    Component: NextPageWithLayout<T>;
}

const App = <T extends {}>({ Component, pageProps }: AppProps<T>) => {
    const getLayout = Component.getLayout ?? ((page) => page);

    return <ParallaxProvider>{getLayout(<Component {...pageProps} />, pageProps)}</ParallaxProvider>;
};

export default App;
