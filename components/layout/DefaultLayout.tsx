import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@ef2-digital/react';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import { PropsWithChildren } from 'react';
import theme from 'theme';
import client from 'graphql/client'

interface DefaultLayoutProps {}

const DefaultLayout = ({ children }: PropsWithChildren<DefaultLayoutProps>) => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Navigation />
                <main id="main">{children}</main>
                <Footer />
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default DefaultLayout;
