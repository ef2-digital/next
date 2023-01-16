import 'styles/globals.scss';
import { PropsWithChildren } from 'react';
import { Inter } from '@next/font/google';
import { fetchGraphql, fetchGraphqlNavigation } from 'utils/graphql';
import classNames from 'classnames';
import Footer from 'components/Footer';
import ClientLayout from './ClientLayout';
import { SingleTypeGeneralQuery } from 'graphql/types';
import { SINGLE_TYPE_GENERAL } from 'graphql/singleTypes/general';
import Header from 'components/Header';

const inter = Inter({
    // Only the design weights.
    weight: ['300', '400', '500', '600', '700'],
    variable: '--inter',
    display: 'swap',
    subsets: ['latin']
});

const getFooterData = async (): Promise<SingleTypeGeneralQuery> => {
    return await fetchGraphql<SingleTypeGeneralQuery>(SINGLE_TYPE_GENERAL);
};

const Layout = async ({ children }: PropsWithChildren) => {
    return (
        <html lang="nl" className={classNames(inter.variable)}>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </head>
            <body className="md:overflow-visible">
                <ClientLayout>
                    <Header navigation={await fetchGraphqlNavigation('main-navigation')} />
                    <main id="main">{children}</main>
                    <Footer data={await getFooterData()} />
                </ClientLayout>
            </body>
        </html>
    );
};

export default Layout;
