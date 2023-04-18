import 'styles/globals.scss';
import { NextIntlClientProvider, useLocale } from 'next-intl';
import { PropsWithChildren } from 'react';
import { Inter } from 'next/font/google';
import { fetchGraphql, fetchGraphqlNavigation } from 'utils/graphql';
import classNames from 'classnames';
// import Footer from 'components/Footer';
import ClientLayout from './ClientLayout';
import Header from 'components/Header';
import { SingleTypeGeneralQuery } from 'graphql/types';
import { SINGLE_TYPE_GENERAL } from 'graphql/singleTypes/general';
import { notFound } from 'next/navigation';

const inter = Inter({
    // Only the design weights.
    weight: ['300', '400', '500', '600', '700'],
    variable: '--inter',
    display: 'swap',
    subsets: ['latin']
});

const Layout = async ({ children }: PropsWithChildren) => {
    const locale = useLocale();

    const [footerData, navigation] = await Promise.all([
        fetchGraphql<SingleTypeGeneralQuery>(SINGLE_TYPE_GENERAL, {locale}),
        fetchGraphqlNavigation('main-navigation', locale)
    ]);

    let messages;

    try {
        messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
        notFound();
    }

    return (
        <html lang="nl" className={classNames(inter.variable)}>
            <body className="md:overflow-visible">
                <ClientLayout>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Header navigation={navigation} />
                    <main id="main">{children}</main>
                    <Footer data={footerData} />
                    </NextIntlClientProvider>
                </ClientLayout>
            </body>
        </html>
    );
};

export default Layout;
