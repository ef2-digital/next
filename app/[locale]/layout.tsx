import ClientLayout from 'app/ClientLayout';
import { PropsWithChildren } from 'react';
import 'styles/globals.scss';

export interface RootLayoutProps<T extends object = {}> {
    params: { locale: string } & T;
}

const Layout = ({ children }: PropsWithChildren) => {
    // Show a 404 error if the user requests an unknown locale
    // if (params.locale !== locale) {
    // notFound();
    // }

    return (
        <html>
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
};

export default Layout;
