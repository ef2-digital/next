import 'styles/globals.scss';
import classNames from 'classnames';
import { Inter } from 'next/font/google';
import { PropsWithChildren } from 'react';
import { fetchGraphql, fetchGraphqlNavigation } from 'utils/graphql';
import { SingleTypeGeneralQuery } from 'graphql/types';
import { SINGLE_TYPE_GENERAL } from 'graphql/singleTypes/general';
import { GeneralSetting } from '../graphql/types';
import { NavigationItem } from '@ef2/content-components-react';
import { NextIntlClientProvider } from 'next-intl';
import ClientLayout from '../ClientLayout';
import Header from 'components/layout/Header';
import Footer from 'components/layout/Footer';
import {notFound} from 'next/navigation';
 
export function generateStaticParams() {
  return [{locale: 'en'}, {locale: 'de'}];
}

const inter = Inter({
    // Only the design weights.
    weight: ['300', '400', '500', '600', '700'],
    variable: '--inter',
    display: 'swap',
    subsets: ['latin']
});

interface LayoutDataProps {
    generalSettings: GeneralSetting;
    navigation: NavigationItem[];
}

export const getLayoutData = async (locale?: string): Promise<LayoutDataProps> => {
    const [settings, navigation] = await Promise.all([
        fetchGraphql<SingleTypeGeneralQuery>(SINGLE_TYPE_GENERAL, { locale }),
        fetchGraphqlNavigation('main-navigation', locale ?? process.env.NEXT_PUBLIC_DEFAULT_LOCALE!)
    ]);

    const generalSettings = settings.generalSetting?.data?.attributes!;

    return { generalSettings, navigation };
};

const getMessages = async (locale: string) => {
    return (await import(`../messages/${locale}.json`)).default;
};

export interface LocalePageProps extends PropsWithChildren {
    params: { locale: string; slug?: string };
}

const RootLayout = async ({ children, params: { locale } }: LocalePageProps) => {
    let messages;

    try {
      messages = (await import(`../../messages/${locale}.json`)).default;
    } catch (error) {
      notFound();
    }

    const layoutData = await getLayoutData(locale);

    return (
        <html lang={locale} className={classNames(inter.variable)}>
            <body className="md:overflow-visible">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <ClientLayout>
                        <Header navigation={layoutData.navigation} logo={layoutData.generalSettings?.logo?.data?.attributes!} />
                        {children}
                        <Footer {...layoutData.generalSettings} />
                    </ClientLayout>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;
