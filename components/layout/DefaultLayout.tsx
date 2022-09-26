import { ThemeProvider } from '@ef2-digital/react';
import Footer from 'components/Footer';
import { PropsWithChildren } from 'react';
import { ApolloProvider } from '@apollo/client';
import client from 'graphql/client';

interface DefaultLayoutProps {}

const DefaultLayout = ({ children }: PropsWithChildren<DefaultLayoutProps>) => {
    // Render.
    return (
        <ThemeProvider>
            <ApolloProvider client={client}>
                <main id="main">{children}</main>
                <Footer />
            </ApolloProvider>
        </ThemeProvider>
    );
};

export default DefaultLayout;
