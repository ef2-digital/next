import ClientLayout from 'app/ClientLayout';
import { PropsWithChildren } from 'react';

const Layout = ({ children }: PropsWithChildren) => {
    // Show a 404 error if the user requests an unknown locale
    // if (params.locale !== locale) {
    // notFound();
    // }

    return (
        <ClientLayout>
            {children}
        </ClientLayout>
    );
};

export default Layout;
