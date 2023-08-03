import ClientLayout from 'app/ClientLayout';
import { GoogleTagManager } from 'components/layout';
import { LOCALES } from 'config';
import { SINGLE_TYPE_GENERAL } from 'graphql/singleTypes/general';
import { SingleTypeGeneralQuery } from 'graphql/types';
import { CookiesProvider } from 'hooks/useCookies';
import { PropsWithChildren } from 'react';
import { fetchGraphql } from 'utils/graphql/fetch';
import { getNavigation } from 'utils/graphql/navigation';
import { NextUIProvider } from '@nextui-org/react';
import 'styles/globals.scss';

export interface RootLayoutProps<T extends object = {}> {
    params: { locale: string } & T;
}

const getGeneralData = async (locale: string): Promise<SingleTypeGeneralQuery> => {
    return await fetchGraphql<SingleTypeGeneralQuery>(SINGLE_TYPE_GENERAL, ['SingleTypeGeneralQuery', locale], { locale });
};

export const generateStaticParams = async (): Promise<{ locale: string }[]> => {
    return Promise.all(LOCALES.map(async (locale) => ({ locale })));
};

const Layout = async ({ children, params: { locale } }: PropsWithChildren<RootLayoutProps>) => {
    // Show a 404 error if the user requests an unknown locale
    // if (params.locale !== locale) {
    // notFound();
    // }

    const general = await getGeneralData(locale);
    const navigation = await getNavigation('main-navigation', locale);

    // Render.
    const settings = general.generalSetting?.data?.attributes;

    return (
        <html lang={locale}>
            <CookiesProvider>
                <GoogleTagManager googleTagManager={settings?.googleTagManager} />
                <body>
                    <ClientLayout navigation={navigation} general={general}>
                        {children}
                    </ClientLayout>
                    {settings?.googleTagManager && (
                        <noscript
                            dangerouslySetInnerHTML={{
                                __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=${settings.googleTagManager}" height="0" width="0" style="display: none; visibility: hidden;" />`
                            }}
                        />
                    )}
                </body>
            </CookiesProvider>
        </html>
    );
};

export default Layout;
