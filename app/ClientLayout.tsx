'use client';

import { NextUIProvider } from '@nextui-org/react';
import { Cookies, Footer, Header } from 'components/layout';
import { NavigationItem } from 'components/navigation/NavigationLink';
import { SingleTypeGeneralQuery } from 'graphql/types';
import { PropsWithChildren } from 'react';

interface ClientLayoutProps {
    general?: SingleTypeGeneralQuery;
    navigation: NavigationItem[];
}

const ClientLayout = ({ children, navigation, general }: PropsWithChildren<ClientLayoutProps>) => {
    return (
        <NextUIProvider>
            <Header navigation={navigation} />
            <main>
                {children}
                <Footer general={general} />
                <Cookies />
            </main>
        </NextUIProvider>
    );
};

export default ClientLayout;
