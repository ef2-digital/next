import { ThemeProvider } from '@ef2-digital/react';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import { PropsWithChildren } from 'react';

interface DefaultLayoutProps {}

const DefaultLayout = ({ children }: PropsWithChildren<DefaultLayoutProps>) => {
    return (
        <ThemeProvider>
            <Navigation />
            <main id="main">{children}</main>
            <Footer />
        </ThemeProvider>
    );
};

export default DefaultLayout;
