import { ThemeProvider } from '@ef2-digital/react';
import classNames from 'classnames';
import Footer from 'components/Footer';
// import { ItemProps } from 'components/menu/Item';
// import Navigation from 'components/Navigation';
import { PropsWithChildren } from 'react';

interface DefaultLayoutProps {
    navigation: any[];
    hero?: boolean;
}

const DefaultLayout = ({ children, navigation, hero }: PropsWithChildren<DefaultLayoutProps>) => {
    // Render.
    return (
        <ThemeProvider>
            {/* <Navigation items={navigation} /> */}
            <main
                id="main"
                className={classNames({
                    "bg-[url('/wave-mobile.svg')] bg-[length:100%_auto] bg-[center_top] bg-no-repeat lg:bg-[url('/wave.webp')] lg:bg-[length:2000px_auto]":
                        hero
                })}
            >
                {children}
            </main>
            <Footer />
        </ThemeProvider>
    );
};

export default DefaultLayout;
