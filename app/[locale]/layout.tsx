import { useLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { LocalePageProps } from '../layout';

const Layout = ({ children, params }: LocalePageProps) => {
    const locale = useLocale();

    // Show a 404 error if the user requests an unknown locale
    if (params.locale !== locale) {
        notFound();
    }

    return (
        <>
            <main id="main">{children}</main>
        </>
    );
};

export default Layout;
