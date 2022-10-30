import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@ef2-digital/react';
import Footer from 'components/Footer';
import Navigation from 'components/Navigation';
import { PropsWithChildren } from 'react';
import theme from 'theme';
import client from 'graphql/client'
import { ItemProps } from 'components/menu/Item';

interface DefaultLayoutProps {
    navigation: ItemProps[];
}

const DefaultLayout = ({ children, navigation }: PropsWithChildren<DefaultLayoutProps>) => {
    return (
        <ApolloProvider client={client}>
            <ThemeProvider theme={theme}>
                <Navigation items={navigation} />
                <main id="main">{children}</main>
                <Footer />
            </ThemeProvider>
        </ApolloProvider>
    );
};

export default DefaultLayout;
