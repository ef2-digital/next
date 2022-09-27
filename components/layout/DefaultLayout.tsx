import { ThemeProvider } from '@ef2-digital/react';
import Footer from 'components/Footer';
import { PropsWithChildren } from 'react';

interface DefaultLayoutProps {}

const DefaultLayout = ({ children }: PropsWithChildren<DefaultLayoutProps>) => {
    // Render.
    return (
        <ThemeProvider>
            <main id="main">{children}</main>
            <Footer />
        </ThemeProvider>
    );
};

export default DefaultLayout;
