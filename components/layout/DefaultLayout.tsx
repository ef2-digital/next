import { ThemeProvider } from '@ef2-digital/react';
import Footer from 'components/Footer';
// import { ItemProps } from 'components/menu/Item';
// import Navigation from 'components/Navigation';
import { PropsWithChildren } from 'react';

interface DefaultLayoutProps {
    navigation: any[];
}

const DefaultLayout = ({ children, navigation }: PropsWithChildren<DefaultLayoutProps>) => {
    // Render.
    return (
        <ThemeProvider>
            {/* <Navigation items={navigation} /> */}
            <main id="main">{children}</main>
            <Footer />
        </ThemeProvider>
    );
};

export default DefaultLayout;
